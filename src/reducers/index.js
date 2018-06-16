import { combineReducers } from "redux";

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
}

function myMovieList(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  searchResults, myMovieList
});
export default rootReducer;
