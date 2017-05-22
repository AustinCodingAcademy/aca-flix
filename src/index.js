import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store.js";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
