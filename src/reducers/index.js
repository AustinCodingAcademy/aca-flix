import {combineReducers} from "redux";
import * as T from "../actions";

/* eslint-disable no-unused-vars */

function searchTerm(state = "", action) {
  switch (action.type) {
    case T.UPDATE_SEARCH_TERM:
      console.log(action.value);
      return action.value;
    default:
      return state;
  }
}

function searchResults(state = [], action) {
  switch (action.type) {
    case T.LOAD_SEARCH_TERM:
      return [];
    case T.SEARCH_RESULTS_LOADED:
      console.log("Search Results Loaded reducer return", action);
      return action.value;


    default:
      return state;
  }
}

function favoriteMovies(state = [], action) {
  switch (action.type) {
    case T.TOGGLE_FAVORITE_MOVIE:
      return state.concat(action.movie);
    case T.MY_MOVIE_LIST_LOADED:
      return action.payload;
    case T.MY_MOVIE_LIST_ERROR:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  favoriteMovies,
  searchResults,
  searchTerm
});
