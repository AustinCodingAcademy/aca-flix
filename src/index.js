/* ### index.js
* import Provider and wrap App
* import store and assign to store prop
*/

import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
import AppContainer from "./containers/AppContainer";

import "whatwg-fetch";



ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
