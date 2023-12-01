import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./Context/shopping/ShoppingState";
import { AuthContextProvider } from "./Context/authContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShoppingState>
        <App />
      </ShoppingState>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
