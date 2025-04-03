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
          <img src={EvanLogo} />
          <p>
            Near Kiran City 4th Km, Bhopa Rd, Muzaffarnagar, Uttar Pradesh
            251001
          </p>
        </div>
        <div className="footer-box footer-box2">
          <h4 className="footer-title">STAY IN TOUCH</h4>
          <div className="SM-footer-box">
            <span className="SM-footer-icon">
              <a href="https://www.facebook.com/EvanMultispeciality/">
                <FacebookRoundedIcon style={{ fontSize: 40 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="https://www.instagram.com/evanhealthcare?igsh=cnlmb2d6ZXZyY2Zl">
                <InstagramIcon className="SMF-icon" style={{ fontSize: 35 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="https://youtube.com/@evanhealthcare?si=DqGiDucJRaktP2lA">
                <YouTubeIcon className="SMF-icon" style={{ fontSize: 35 }} />
              </a>
            </span>
            <span className="SM-footer-icon">
              <a href="#">
                <XIcon className="SMF-icon" style={{ fontSize: 30 }} />
              </a>
            </span>
          </div>
        </div>
        <div className="footer-box">
          <p className="footer-para">
            <strong>Call us: </strong>+91 9068995077, +91 7088002601, <br />
            +91 7078693040
          </p>
          <p className="footer-para footer-para-res">
            © 2025 Evan Healthcare. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
