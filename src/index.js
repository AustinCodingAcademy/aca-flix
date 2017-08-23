import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store";
// import App from "./App";


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
