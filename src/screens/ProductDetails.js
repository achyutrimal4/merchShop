import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as aiIcons from "react-icons/ai";
import Card from "../components/Card";

function ProductDetails() {
 
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const sentences = product.description.split(/(?<=[.\-])\s+/);
  return (
    <>
    
      <div className="product-detail-canvas">
        <div className="container">
          <div className="row-1">
            <div className="col-1">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="col-2">
              <div className="col-2-container">
                <div className="details-header">
                  <p className="text-shadow product-name">{product.name}</p>
                  <span className="price-span">
                    <p className="product-price">Rs. {product.price}</p>
                  </span>
                </div>

                <div className="details-body">
                  <p className="title">Description</p>
                  <p>{sentences[0]}</p>

                  {sentences.slice(1).map((sentence, index) => (
                    <p key={index} className="detail-list">
                      {sentence}
                    </p>
                  ))}
                </div>
              </div>
              <Link id='cart-btn' className="add-to-cart" to='/shop'>
                <p className="text-shadow">Add item</p>
                <span className="btn-shadow"></span>
              </Link>
            </div>
          </div>

          <div className="row-2">
          <div className="col-1">
            <p className="text-shadow">You may also like</p>
          </div>
          <div className="col-2">
          <div className="card-grid-2">
            {products.slice(0, 2).map((product) => (
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
      </div>
    </>
  );
}

export default ProductDetails;
