import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";

import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";

import "./App.scss";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home greeting="Mary Jane" />}
            />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/category/:id" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
