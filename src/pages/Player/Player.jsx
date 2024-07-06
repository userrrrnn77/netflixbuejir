import React, { useEffect, useState } from "react";
import "./Player.css";
import panah from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY5ZjJhN2FiODVhOGVlZjJkMGU4ZWNkNzdiMGVkZiIsIm5iZiI6MTcyMDI4MTcyOS4zMDAzNSwic3ViIjoiNjY2OWQ2MDBmZjQ1ZGRiZmY0MDdkNDk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dETi0PlyoKWPUuWcfjpKFR-JGA7SANw7KyICk_q73Ok",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={panah}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p> {apiData.published_at.slice(0, 10)} </p>
        <p> {apiData.name} </p>
        <p> {apiData.typeof} </p>
      </div>
    </div>
  );
};

export default Player;
