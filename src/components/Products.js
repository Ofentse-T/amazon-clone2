import React from "react";
import "./Products.css";
import Product from "./Product";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="
          Toshiba Canvio Advance 2TB Portable External Hard Drive USB 3.0, Black
          - HDTCA20XK3AA"
          image="https://m.media-amazon.com/images/I/71SNd5dEhoL._AC_UY327_FMwebp_QL65_.jpg"
          rating="4"
          price="R1699"
        />
        <Product
          id="1"
          title="
          Toshiba Canvio Advance 2TB Portable External Hard Drive USB 3.0, Black
          - HDTCA20XK3AA"
          image="https://m.media-amazon.com/images/I/71SNd5dEhoL._AC_UY327_FMwebp_QL65_.jpg"
          rating="4"
          price="R1699"
        />
        <Product
          id="1"
          title="
          Toshiba Canvio Advance 2TB Portable External Hard Drive USB 3.0, Black
          - HDTCA20XK3AA"
          image="https://m.media-amazon.com/images/I/71SNd5dEhoL._AC_UY327_FMwebp_QL65_.jpg"
          rating="4"
          price="R1699"
        />
      </div>
    </>
  );
};

export default Products;
