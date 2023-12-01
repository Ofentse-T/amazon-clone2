import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/authContext";

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
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
        {ctx.isLoggedIn ? (
          <Link to="/">
            <div className="header_option" onClick={ctx.onLogout}>
              <span className="header_option1">Hello Guest</span>
              <span className="header_option2">Sign In</span>
            </div>
          </Link>
        ) : (
          <Link to="LogIn">
            <div className="header_option" onClick={onLogout}>
              <span className="header_option1">Hello Guest</span>
              <span className="header_option2">Sign In</span>
            </div>
          </Link>
        )}

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
