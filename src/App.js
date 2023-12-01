import "./App.css";
import { useContext, useEffect } from "react";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import LogIn from "./components/LogIn";
import NotFound from "./components/NotFound";
import shoppingContext from "./Context/shopping/shoppingContext";
import { auth } from "../firebase";

const App = () => {
  const shoppingContext = useContext(shoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          {/* The default route that redirects to "/home" */}
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Switch>
//           <Route path="/" exact />
//             <Redirect to="/home" />
//           </Route>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Route path="/products" exact>
//             <Products />
//           </Route>
//           <Route path="/products/:id">
//             <ProductDetails />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// };

export default App;
