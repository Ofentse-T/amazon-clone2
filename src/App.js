import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
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
          {/* The default route that redirects to "/home" */}
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </div>
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
