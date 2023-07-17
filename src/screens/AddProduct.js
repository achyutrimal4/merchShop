import React from "react";

function AddProduct() {
  return (
    <div className="addproduct-canvas">
      <h1 className="text-shadow">Add Products</h1>
      <form action="">
        <div className="col1">
          <div className="input-group">
            <label>Product Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea type="text" />
          </div>
          <input type="submit" value="Add Product" id="btn-submit" />
          
        </div>

        <div className="col2">
          <div className="input-group">
            <label>Price</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Sizes</label>
            <input type="text" />
          </div>
        </div>

        <div className="col3">
        <div className="input-group">
            <label>Discount</label>
            <input type="text" />
          </div>
          <div className="input-group row">
            <label class="container">
              Is Accessory?
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
