import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import ".LogIn.css";

const redudcer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {...state, emailValue: action.payload};
  }

  if (action.type === "PASS_INPUT") {
    return {...state, passwordValue: action.payload};
  }
  return {emailValue: "", passwordValue: ""};
};

const LogIn = () => {
  // const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "", passwordValue: "",
  });

  const emailChangeHandler = (e) => {
    // setEmail(e.target.value);
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value});
    // setFormIsValid(e.target.value.includes("@") && password.trim().length > 6);
  };

  const passwordChangeHandler = (e) => {
    // setEmail(e.target.value);
    dispatch({ type: "PASS_INPUT", payload: e.target.value});
    // setFormIsValid(email.includes("@") && e.target.value.trim().length > 6);
  };


  // useEffect(() => {
  //   const identifier = setTimeout {() => {
  //     console.log("CHECKING FOR FORM VALIDITY");
  //   }, 500}
    
    return () => {
      console.log("CLEANUP FUNCTION BEFORE NEXT SIDE EFFECT");
      clearTimeout(identifier);
    };
  }, [email, password]);

  
  

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email:", state.emailValue)
    console.log("Entered Password:", state.passwordValue)
  };
};

// const [isLoggedIn, SetIsLoggedin] = useState(false);
// const emailRef = useRef();
// const passwordRef = useRef();

const signIn = (e) => {
  e.preventDefault();
  // console.log("Email: ", ennteredEmail + "Password ", ennteredPassword);
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
