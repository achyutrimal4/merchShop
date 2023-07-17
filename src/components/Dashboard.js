import React from "react";
import "../admin.css";
import lightburst from "../media/images/lightburst.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="dashboard">
      <motion.img
        src={lightburst}
        id="lightburst"
        alt="Loading ..."
        // initial={{ scale: 1 }}
        animate={{ rotate: 360, scale: 2 }}
        transition={{
          repeat: Infinity,
          // type: "tween",
          duration: 30,
          ease: "linear",
        }}
    />
      <div className="link-container">
        <h1 className="text-shadow">admin panel</h1>

        <div className="links">
          <Link to="/payments" id="link">
            <p className="text-shadow">Payments</p>
          </Link>
          <Link to="/users" id="link">
            <p className="text-shadow">Users</p>
          </Link>
          <Link to="/produts" id="link">
            <p className="text-shadow">Products</p>
          </Link>
        </div>
      </div>      
    </div>
  );
}
export default Dashboard;
