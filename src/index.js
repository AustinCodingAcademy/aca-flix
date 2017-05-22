import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import {Provider} from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
