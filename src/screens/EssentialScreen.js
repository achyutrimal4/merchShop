import React from "react";
import Sidebar from "../components/Sidebar";
import logo from "../media/images/logo.png";
// import Marquee from "react-fast-marquee";
import Marquee from "react-fast-marquee";
import products from "../../src/products";
import Card from "../components/Card";
import LatestVideo from "../components/LatestVideo";

function EssentialScreen(){
  return(
<div className="shopall-canvas">
      <div className="shopall-container">
        <Sidebar />
        <div className="right-container">
          <div className="header">
            <p className="text-shadow">Essentials</p>
            <img src={logo} alt="logo" />
          </div>

          <div className="all_products__marquee">
            <Marquee className="products__marquee">
              <p className="text-shadow">Essentials</p>
              <p className="text-shadow">Essentials</p>
              <p className="text-shadow">Essentials</p>
              <p className="text-shadow">Essentials</p>
              <p className="text-shadow">Essentials</p>
            </Marquee>
          </div>

          <div className="product-grid">
            <div className="card-grid">
              {products.map((product) => (
                <div key={product._id} id="card__product">
                  <div className="card">
                    <Card product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LatestVideo />
    </div>
  )
}

export default EssentialScreen;