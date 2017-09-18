import {combineReducers} from "redux";

function searchResults(state = [], action){
    return state;
}

function myMovieList(state  = [], action){
    return state;
}

const rootReducer = combineReducers({
    searchResults,myMovieList
});
export default rootReducer;