import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div className="socials">
          <div className="mobile">
            <p>EXPERIENCE SMART SHOPPING APP ON MOBILE</p>
            <a href="https://play.google.com/">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png"
                alt="App Store"
              />
            </a>
            <a href="https://www.apple.com/in/app-store/">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
              />
            </a>
          </div>
          <div className="social">
            <p>KEEP IN TOUCH</p>
            <a href="https://www.instagram.com">
              <InstagramIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
            </a>
            <a href="https://www.facebook.com">
              <FacebookIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
            </a>
            <a href="https://www.twitter.com">
              <XIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
            </a>
            <a href="https://www.youtube.com">
              <YouTubeIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
            </a>
          </div>
        </div>
        <div className="customer">
          <p>Customer Care</p>
          <a href="www.gmail.com">
            <EmailIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
          </a>
          <a href="451651651">
            <PhoneIcon sx={{ fontSize: "2.8rem", fill: "black" }} />
          </a>
        </div>
      </div>
      <p className="copyRight">
        {" "}
        &copy; 2024 www.smartshopping.com.All rights reserved
      </p>
    </div>
  );
};

export default Footer;
