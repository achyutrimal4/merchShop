import React from "react";
import logo from "../media/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const images = [
    "images/cards/card-back.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 17.png",
    "images/cards/Asset 16.png",
    "images/cards/card-back.png",
    "images/cards/Asset 13.png",
    "images/cards/Asset 12.png",
    "images/cards/card-back.png",
    "images/cards/Asset 11.png",
    "images/cards/Asset 9.png",
    "images/cards/Asset 5.png",
    "images/cards/card-back.png",
    "images/cards/Asset 4.png",
    "images/cards/Asset 1.png",
    "images/cards/card-back.png",
    // Add more image URLs as needed
  ];
  return (
    <div className="footer-canvas" >
      {/* <div className="confettis">
        {images.map((image) => (
          <img src={image} alt="card" className="confetti" />
        ))}
      </div> */}

      <div className="container">
        <div className="col1">
          <Link to="/" id="footer-link">
            Home
          </Link>
          <Link to="/shop" id="footer-link">
            Shop All
          </Link>
          <Link to="/essentials" id="footer-link">
            Essentials
          </Link>
        </div>

        <div className="col2">
          {/* <img src={logoName} alt="Saman Maharjan" /> */}
          <img src={logo} alt="saman maharjan logo" />
          <div className="footer-name">
            {/* <img src={name} alt="Saman Maharjan" /> */}
          </div>

          <div className="links">
            <a href="facebook.com" target="_blank">
              Facebook
            </a>
            <a href="facebook.com" target="_blank">
              Youtube
            </a>
            <a href="facebook.com" target="_blank">
              Instagram
            </a>
            <a href="facebook.com" target="_blank">
              TikTok
            </a>
          </div>

          <p id="copyright">
            Copyright <i class="fa-regular fa-copyright"></i> Saman Maharjan -
            2023{" "}
          </p>
        </div>

        <div className="col3">
          <Link to="/" id="footer-link">
            FAQ
          </Link>
          <Link to="/shop" id="footer-link">
            About
          </Link>
          <Link to="/contact" id="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
