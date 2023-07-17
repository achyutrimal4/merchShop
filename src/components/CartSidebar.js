import React, {useState} from "react";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function CartSidebar() {
    const [sidebarOpen, setSidebar] = useState(false)
    const showSidebar = () => setSidebar (!sidebarOpen)
  return (
    <>
    <IconContext.Provider>
      <div className="cart-sidebar">
        <Link to="/" className="cart-icon">
          <faIcons.FaShoppingCart onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebarOpen ? "sidebar-menu active" : "sidebar-menu"}>
        <ul className="nav-menu-items">
            <li className="navbar-toggle">
                <Link className="menu-bars" onClick={showSidebar}>
                    <i className="fa-solid fa-xmark"></i>
                </Link>
            </li>
        </ul>
      </nav>
    </IconContext.Provider>

    </>
  );
}

export default CartSidebar;
