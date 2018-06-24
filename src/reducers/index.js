import {combineReducers} from "redux";

const myMovieList = (state = [], action) => {
    if(action.type === "MY_MOVIE_LIST_LOADED"){
        return action.value;
    } return state;
}

const searchResults = (state = [], action) => {
    if(action.type === "SEARCH_RESULTS_LOADED"){
        return action.value;
    } return state;
}

const rootReducer = combineReducers({myMovieList, searchResults});

export default rootReducer;