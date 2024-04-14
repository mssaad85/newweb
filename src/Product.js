// Product.js
import React from 'react';
import './Product.css'; // Import CSS file for styling

function Product({ image, name, description, price }) {
  return (
    <div className="product-box">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;
