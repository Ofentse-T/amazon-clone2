import React, { useContext } from "react";
import "./Product.css";
import shoppingContext from "../Context/shopping/shoppingContext";
import shoppingContext from "../Context/shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(shoppingContext);
  const { AddToBasket } = shoppingContext;

  const AddToBasketHandler = () => {
    AddToBasket({ item: { id, image, title, rating, price } });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>star</p>
            ))}
        </div>
        <p className="product_price">{price}</p>
      </div>
      <button className="product_button" onClick={AddToBasketHandler}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
