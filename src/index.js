import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import "./index.css";


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
    </Provider>,
  document.getElementById("root")
);
