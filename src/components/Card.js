import React from "react";
import { Link } from "react-router-dom";
import boom from "../media/images/discount-boom.png";
import priceTag from "../media/images/yellow.png";
import Marquee  from "react-fast-marquee";
import lightburst from "../media/images/lightburst-orange.png";

function Card({ product }) {
  return (
    <Link
      to={`/shop/${product._id}`}
      className="product-card"
      key={product._id}
    >
      {/* <div className="card-spinner"> */}
      <img className="card-lightburst" src={lightburst} alt="Loading ..." />
      {/* </div> */}

      <div className="product-discount">
        <p>-{product.discount}%</p>
        <img src={boom} alt="discount boom" id="discount-boom" />
      </div>
      <div className="card-body">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-footer">
        <div className="slider">
          <p id="product-name">{product.name}</p>
          <div className="price">
            <img src={priceTag} alt="price tag" id="price-tag" />
            <p id="price">Rs. {product.price}</p>
          </div>
        </div>

        <div className="sizes">
          {product.size ? (
            <>
              <div className="text">
                <p>Select size</p>
              </div>

              <div className="size">
                {product.size.map((size) => (
                  <Link to="/" id="sizeText">
                    {size}
                  </Link>
                ))}

                <div />
              </div>
            </>
          ) : (
            <>
              <Marquee>
                <Link id="cart-marquee">
                  <p className="text-shadow">Add to cart</p>
                </Link>
              </Marquee>
              </>
          )}
        </div>
      </div>
    </Link>
  );
}
export default Card;
