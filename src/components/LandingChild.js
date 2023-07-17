import {React, useEffect, useState} from "react";
import "../index.css";
import { Link } from "react-router-dom";
import bgColor from "../BgColor";

function LandingChild() {

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bgColor.length);
      setRandomImage(bgColor[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-child">
      <div className="discounts">
        <div className="left-container">
          {randomImage && (
            <Link
              id="btn-essentials"
              to="/essentials"
              style={{
                backgroundImage: `url(${randomImage.image})`,
                color: randomImage.color,
              }}
            >
              <p className="text-shadow">Check the discounts</p>
            </Link>
          )}
        </div>

        <div className="right-container">
          <Link to="/shop" id="btn-shop__all">
            <p className="text-shadow">Shop all</p>
            <span className="btn-shadow"></span>
          </Link>

          <Link to="/" id="btn-play__now">
            <p className="text-shadow">Slap to win</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LandingChild;
