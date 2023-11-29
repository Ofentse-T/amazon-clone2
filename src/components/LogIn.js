import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ".LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setFormIsValid(e.target.value.includes("a") && password.trim().length > 6);
  };

  const passwordChangeHandler = (e) => {
    setEmail(e.target.value);

    setFormIsValid(e.target.value.trim().length > 6 && email.includes("@"));
  };
};

// const [isLoggedIn, SetIsLoggedin] = useState(false);
// const emailRef = useRef();
// const passwordRef = useRef();

const signIn = (e) => {
  e.preventDefault();
  console.log("Email: ", ennteredEmail + "Password ", ennteredPassword);
  console.log(formIsValid);

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
          <input type="text" ref={emailRef}></input>
          <h5>Password</h5>
          <input type="password" ref={passwordRef}></input>
          <button type="submit" className="login_signInButton" onClick={signIn}>
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
