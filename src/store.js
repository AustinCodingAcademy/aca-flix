import state from "./state";
import reducers from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = (
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
);

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default createStore(reducers,state,enhancer);
