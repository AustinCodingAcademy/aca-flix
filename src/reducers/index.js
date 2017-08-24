import {combineReducers} from "redux";
import {
  SEARCH_RESULTS_LOADED,
  MY_MOVIE_LIST_LOADED
} from "../actions";

function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_LOADED:
      console.log(action.value);
      return action.value;
  }
  return state;
}

function myMovieList(state = [], action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      return action.value;
  }
  return state;
}


export default combineReducers({
  searchResults,
  myMovieList
});
