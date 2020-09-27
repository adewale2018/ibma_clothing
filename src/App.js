import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/homepage/Home";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default hot(module)(App);
