import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text">
          <SearchIcon className="search_icon" />
        </input>
      </div>
      <div className="header_nav">
        <Link to="LogIn">
          <div className="header_option">
            <span className="header_option1">Hello Guest</span>
            <span className="header_option2">Sign In</span>
          </div>
        </Link>
        <Link />

        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option2 header_basketCount">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
