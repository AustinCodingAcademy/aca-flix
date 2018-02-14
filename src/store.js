import state from "./state";
import reducers from "./reducers";
// import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";


const store = createStore(reducers,state,enhancer);
export default store;
