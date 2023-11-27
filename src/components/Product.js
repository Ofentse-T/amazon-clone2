import React from "react";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://m.media-amazon.com/images/I/71SNd5dEhoL._AC_UY327_FMwebp_QL65_.jpg"
        alt="hard_drive"
      />
      <div className="product_info">
        <p>
          Toshiba Canvio Advance 2TB Portable External Hard Drive USB 3.0, Black
          - HDTCA20XK3AA
        </p>
        <div className="product_rating">
          <p>4</p>
        </div>
      </div>
      <div className="prodcut_price">
        <p>R1699</p>
      </div>
    </div>
  );
};

export default Product;
