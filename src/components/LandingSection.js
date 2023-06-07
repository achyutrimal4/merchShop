import React from "react";
import "../index.css";
import giftbox from "../media/images/giftbox.png";
import qr from "../media/images/qr.png";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div className="landing-section">
      <div className="limited-edition">
        <div className="left-container">
          <p id="limited-edition" className="text-shadow">
            Limited Edition
          </p>
          <p id="collectible" className="text-shadow">
            Authentic Set Piece Collectible
          </p>
        </div>

        <div className="right-container">
          <div className="gift-box">
            {/* <img src={giftbox} alt="gift box"/> */}
            <p>Get Yours </p>
          </div>

          <div className="qr">
            <div className="qr-container">
              <div className="qr-img">
                <img src={qr} alt="Instagram Link" />
              </div>
              <p>
                Scan the qr Code to get your authentic set piece collectible
                while supplies last.
              </p>
              <Link to="/shop" id="btn-shop">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
        <div className="landing-two">

        </div>
    </div>
  );
}
export default LandingSection;
