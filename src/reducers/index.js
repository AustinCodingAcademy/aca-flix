import {combineReducers} from "redux";

function myMovieList(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return state;
  }
}

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return state;
  }
}

const rootReducer = combineReducers({myMovieList, searchResults});
export rootReducer;
