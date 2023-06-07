import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function LandingChild() {

    
  return (
    <div className="landing-child">
      <div className="discounts">
        <div className="left-container">
          <Link id="btn-essentials" to="/essentials">
            <p className="text-shadow">Check the discounts</p>
          </Link>
        </div>

        <div className="right-container">
          <Link to="/shop" id="btn-shop__all">
            <p className="text-shadow">Shop all</p>
            <span className="btn-shadow"></span>
          </Link>

          <Link to='/' id="btn-play__now">
          <p className="text-shadow">Slap to win</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LandingChild;
