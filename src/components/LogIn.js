import React, { useState } from "react";
import { Link } from "react-router-dom";
import ".LogIn.css";

const LogIn = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/logo._TTD_.png"
          alt="login_logo"
          className="login_logo"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text"></input>
          <h5>Password</h5>
          <input type="password"></input>
          <button type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>lorem</p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
