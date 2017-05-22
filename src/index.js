import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store";

import "whatwg-fetch";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,

  document.getElementById("root")
);
