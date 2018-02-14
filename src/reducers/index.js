import {combineReducers} from "redux";

function searchResults(state = [], action) {
  if (state === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
};

function myMovieList(state = [], action) {
  if (state === "LOAD_MY_MOVIE_LIST") {
    return action.value;
  }
  return state;
};

const rootReducer = combineReducers({
  searchResults,myMovieList
});

export default rootReducer;
