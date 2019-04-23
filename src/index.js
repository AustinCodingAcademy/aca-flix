import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
//import App from "./App";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
