import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search_icon.svg";
import Bell from "../../assets/bell_icon.svg";
import Profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New</li>
          <li>Popular</li>
          <li>Browse by Languange</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src={Search} alt="" />
        <p>Chidren</p>
        <img className="icons" src={Bell} alt="" />
        <div className="navbar-profile">
          <img className="profile" src={Profile} alt="" />
          <img src={caret} alt="" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
