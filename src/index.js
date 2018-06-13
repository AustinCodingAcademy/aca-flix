import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store";
import Provider from "react-redux";


ReactDOM.render(
  <Provider ><App store={store} /></Provider>,
  document.getElementById("root")
);
