import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="links-container">
        <p id="title">Collections</p>

        <div className="links">
          <Link to="/shop" id="link">
            All Collections
          </Link>

          <Link to="/essentials" id="link">
            Essentials
          </Link>
        </div>

        <p id="title">Category</p>
        <div className="links">
          <Link to="/shop" id="link">
            All Products
          </Link>

          <Link to="/shop" id="link">
            Accessories
          </Link>

          <Link to="/essentials" id="link">
            Crewneck Sweats
          </Link>

          <Link to="/essentials" id="link">
            Hoodies
          </Link>
          <Link to="/essentials" id="link">
            Long Sleeve Tshirt
          </Link>

          <Link to="/essentials" id="link">
            T-shirt
          </Link>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          Welcome to all of Samans's merch! Not all garments will be restocked
          so get yours before they're sold out.
        </p>

        <div className="socials">
          <p>Socials</p>

          <div className="icons">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook"></i></a>

            <a href="https://www.instagram.com/saman_maharjan_/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram"></i></a>

            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
