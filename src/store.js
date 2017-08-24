/* ### Store
* Create our standard store.js file
* Use redux-thunk middleware
* Import reducers
* create store and export


*/

import state from "./state";
import reducers from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";  // boilerplate code below

const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
 applyMiddleware(thunk)  // applies the middleware to redux (thunk)
);
const store = createStore(reducers,state,enhancer);
export default store;
