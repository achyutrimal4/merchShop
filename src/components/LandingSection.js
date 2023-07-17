import React from "react";
import "../index.css";
import qr from "../media/images/qr.png";
import { Link } from "react-router-dom";
import suitcase from "../media/images/suitcase.png";
import lightburst from '../media/images/lightburst.png'
import { motion } from "framer-motion";
import deck from "../media/images/deck bundles.png";
import spark from '../media/images/spark-01.png'

function LandingSection() {
  return (
    <div className="landing-section">
      <motion.img src={lightburst} id="lightburst" alt="Loading ..."
      // initial={{ scale: 1 }}
      animate={{ rotate: 360 , scale:1.5}}
      transition=
      {{
        repeat:Infinity,
        // type: "tween",
        duration:30,
        ease: "linear",
      }}
       />
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
            <img src={suitcase} alt="gift box" />
            <div className="gift-text">

                <motion.img
                id="spark"
                  src={spark}
                  alt="Spark ..."
                  // initial={{ scale: 1 }}
                  // whileHover={{rotate: 360, scale: 1 }}
                  animate={{rotate: 360, scale: 1  }}
                  transition={{
                    repeat: Infinity,
                    // type: "tween",
                    duration: 10,
                    ease: "linear",
                  }}
                />
                
              <p className="text-shadow">
                Get Yours
                {/* <span className="btn-shadow"></span> */}
              </p>
              <span>
                <p className="text-shadow">For</p>
                <p className="text-shadow">Rs. 100</p>
              </span>
            </div>
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

      <div className="deck">
        <img src={deck} alt="Deck Bundle"/>

      </div>
    </div>
  );
}
export default LandingSection;
