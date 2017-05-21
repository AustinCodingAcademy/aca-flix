import {combineReducers} from "redux";
import {
} from "../actions";

function myMovieList(state = []) {
  /* switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      return action.myMovieList;
  }*/
  return state;
}

function searchResultsLoaded(state = []) {
  /* switch (action.type) {
    case SEARCH_RESULTS_LOADED:
      return action.searchResults;
  }*/
  return state;
}

export default combineReducers({
  myMovieList,
  searchResultsLoaded
});
