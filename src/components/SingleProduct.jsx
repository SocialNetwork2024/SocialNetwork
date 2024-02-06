import React from "react";

const SingleProduct = () => (
  <div className="single-product">
    <div className="product-title">Product Name</div>
    <div className="product-details">
      <span className="product-rating">Product Rating</span>
    </div>
    <img
      src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
      alt="Product Image"
      className="product-image"
    />
    <div className="product-availability">Availability: In Stock</div>
    <div className="product-popularity">Popularity: High</div>
  </div>
);

export default SingleProduct;
