import {combineReducers} from "redux";
import {
  MY_MOVIE_LIST_LOADED,
  SEARCH_RESULTS_LOADED
} from "../actions";

function myMovieListLoaded(state = [], action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      return action.value;
    default:
      return state;
  }
}

function searchResultsLoaded(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_LOADED:
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  myMovieListLoaded,
  searchResultsLoaded
});
