import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../assets/hero_banner.jpg";
import herotitile from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={Hero} alt="" />
        <div className="hero-caption">
          <img className="caption-img" src={herotitile} alt="" />
          <p>
            Discovering his ties to a secret acient order, a young man living an
            modern Instanbul embarks on a quest to save the city from a immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playicon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoicon} alt="" />
              More Info
            </button>
          </div>
          <div className="title-cards">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
