import React from "react";
import products from "../products";
import Card from "./Card";
import lightburst from "../media/images/lightburst.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import spark from "../media/images/spark-01.png";

function ProductsRow() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.0]);
  return (
    <div className="products-row">
      <motion.img
        src={lightburst}
        style={{ transform: "scale(2)" }}
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
      <div className="spinner-overlay">
        <div className="card-container">
          <motion.div
            style={{ scale }}
            id="product-title"
            className="text-shadow"
          >
            level up your swag
          </motion.div>

          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <p id="product-subtitle">Let's see that cart blow up</p>

          <div className="card-grid">
            {products.slice(0, 4).map((product) => (
              <div key={product._id} id="card__product">                
                <div className="card">
                <Card product={product} />
                </div>
              </div>
            ))}
          </div>

          <Link id="btn-view__all" to="/products">
            <p className="text-shadow">View All Products</p>
            <span className="btn-shadow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductsRow;
