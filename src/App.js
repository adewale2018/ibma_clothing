import React from "react";
import { hot } from "react-hot-loader";

import Home from "./pages/homepage/Home";
import "./App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default hot(module)(App);
