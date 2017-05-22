import {combineReducers} from "redux";
import {
  MY_MOVIE_LIST_LOADED,
  SEARCH_RESULTS_LOADED
} from "../actions";

function myMovieList(state = [], action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      return action.myMovieList;
  }
  return state;
}

function searchResultsLoaded(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_LOADED:
      return action.searchResults;
  }
  return state;
}

export default combineReducers({
  myMovieList,
  searchResultsLoaded
});
