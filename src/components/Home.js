import React from "react";
import "./Home.css";
import Products from "./Products";
// import { Route } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71wixeWfdBL._SX3000_.jpg"
          alt="hero_image"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
