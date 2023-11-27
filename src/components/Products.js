import React from "react";
import "./Products.css";
import Product from "./Product";
import { Link } from "react-router-dom";

const Products = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
        <p className="product_price">{price}</p>
      </div>
    </div>
  );
};

export default Products;
