import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/homepage/Home";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default hot(module)(App);
