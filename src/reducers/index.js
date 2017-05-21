import {combineReducers} from "redux";

function myMovieList(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
}

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
}

function searchTerm(state = "", action) {
  if (action.type === "UPDATE_SEARCH_TERM") {
    return action.value
  }
  return state;
}

const rootReducer = combineReducers({
  myMovieList,
  searchResults,
  searchTerm
});

export default rootReducer;
