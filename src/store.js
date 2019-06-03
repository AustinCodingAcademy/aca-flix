import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import state from "./state";
import thunk from "redux";

export default createStore(reducers, state, applyMiddleware(thunk));

