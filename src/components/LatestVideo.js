import React, { useEffect, useState } from "react";
// import cardImages from '../cardImages'

function LatestVideo() {
  const images = [
    "/images/cards/14.png",
    "/images/cards/1.png",
    "/images/cards/2.png",
    "/images/cards/3.png",
    "/images/cards/4.png",
    "/images/cards/5.png",
    "/images/cards/6.png",
    "/images/cards/7.png",
    "/images/cards/8.png",
    "/images/cards/9.png",
    "/images/cards/10.png",
    "/images/cards/11.png",
    "/images/cards/12.png",
    "/images/cards/13.png",
    "/images/cards/14.png",
  ];
  const [currentIndexes, setCurrentIndexes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const indexes = generateUniqueIndexes(images.length);
      setCurrentIndexes(indexes);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const generateUniqueIndexes = (arrayLength) => {
    const indexes = [];
    while (indexes.length < arrayLength) {
      const randomIndex = Math.floor(Math.random() * arrayLength);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  const colors = ["red", "blue", "green", "fuschia", "orange", "purple", "pink", "brown"];
  const [selectedColors, setSelectedColors] = useState([]);

  const getRandomColors = () => {
    const randomColors = [];
    while (randomColors.length < 5) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];
      if (!randomColors.includes(color)) {
        randomColors.push(color);
      }
    }
    return randomColors;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColors = getRandomColors();
      setSelectedColors(randomColors);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="latest-video">
      <div className="left-container">
        <div style={{ width: "100%", height: "58vh", position: "relative" }}>
          {/* height:"0px",position:"relative",padding-bottom:"56.250%", */}
          <iframe
            src="https://streamable.com/e/xtz7xh?autoplay=1&nocontrols=1"
            frameborder="0"
            width="100%"
            title="Magic Show"
            height="100%"
            allowfullscreen
            allow="autoplay"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>

      <div className="right-container">
        <div className="cards">
          <div className="card-grid">
            {currentIndexes.map((index, i) => (
              <div className="card" key={i}>
                <div>
                  {getRandomColors().map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="card-overlay"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                  <img
                    key={i}
                    src={images[index]}
                    alt={`Slider ${i}`}
                    id="random_img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LatestVideo;
