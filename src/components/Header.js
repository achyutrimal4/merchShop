import React, { useState } from "react";
import logo from "../media/images/logo.png";
import "../index.css";
import { NavLink, Link } from "react-router-dom";
import * as aiIcons from "react-icons/ai";

function Header() {
  const [sidebarOpen, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebarOpen);
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

        <NavLink onClick={showSidebar} className="cart-btn">
          Cart (0)
        </NavLink>

        <div className={sidebarOpen ? "sidebar-menu active" : "sidebar-menu"}>
          <div className="closeBtn">
            <p>Your Cart</p>
            <Link  className="menu-bars" onClick={showSidebar}>
              <aiIcons.AiOutlineClose />
            </Link>
          </div>

          <div className="cart-content">
            <p className="text-shadow empty-text">Your cart is empty</p>
          </div>

          <div className="cart-footer">
            <div className="col-1">
              <Link id='cart-btn'  onClick={showSidebar} to='/shop'>
                <p className="text-shadow">Add an item</p>
                <span className="btn-shadow"></span>
              </Link>
            </div>
            <div className="col-2">
              <p>subtotal:</p>
              <p>Rs 0.00</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
export default Header;
