import React from "react";
import "./Footer.css";
import sosial from "../../assets/youtube_icon.png";
import sosial1 from "../../assets/twitter_icon.png";
import sosial2 from "../../assets/instagram_icon.png";
import sosial3 from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={sosial} alt="" />
        <img src={sosial1} alt="" />
        <img src={sosial2} alt="" />
        <img src={sosial3} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invertor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">&copy; 2019-2024 Rens, Inc.</p>
    </div>
  );
};

export default Footer;
