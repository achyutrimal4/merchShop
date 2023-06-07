import React from "react";
import logo from "../media/images/logo.png";
import "../index.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="left-container">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          Shop All
        </NavLink>
        <NavLink
          to="/essentials"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          Essentials
        </NavLink>
      </div>
      <div className="brand-logo">
        <Link to="/">
        <img src={logo} alt="Saman Maharjan Logo" />
        </Link>
      </div>
      <div className="right-container">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
        >
          Cart
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
