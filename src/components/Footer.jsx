import React from "react";
import "../components/Footer.css";
import EvanLogo from "../assets/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-box">
          <img src={EvanLogo} height={100} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum, impedit.
          </p>
          <p>Call us: +91 70786-93040</p>
          <p>Mail us: evan@evan.com</p>
          <p>Follow us on social media:</p>
          <div className="SM-footer-box">
            <span className="SM-footer-icon">
              <a href="#">
                <FacebookRoundedIcon style={{ fontSize: 45 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="#">
                <InstagramIcon className="SMF-icon" style={{ fontSize: 40 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="#">
                <YouTubeIcon className="SMF-icon" style={{ fontSize: 40 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="#">
                <XIcon className="SMF-icon" style={{ fontSize: 35 }} />
              </a>
            </span>
          </div>
        </div>
        <div className="footer-box footer-box2">
          <h2 className="footer-title">About Hospital</h2>
          <ul className="footer-nav">
            <li>Home</li>
            <li>About</li>
            <li>Our Doctors</li>
            <li>Department</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-box footer-box2">
          <h2 className="footer-title">Help & Support</h2>
          <ul className="footer-nav">
            <li>Home</li>
            <li>About</li>
            <li>Our Doctors</li>
            <li>Department</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
