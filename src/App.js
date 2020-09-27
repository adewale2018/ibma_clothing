import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/homepage/Home";
import ShopPage from "./pages/shop/Shop";
import "./App.css";

function otherPage() {
  return <h1>I am the other page!!!</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default hot(module)(App);
