import {combineReducers} from "redux";
import {
  LOAD_MY_MOVIE_LIST,
  MY_MOVIE_LIST_LOADED,
  MY_MOVIE_LIST_ERROR,
  LOAD_SEARCH_TERM,
  UPDATE_SEARCH_TERM,
  SEARCH_RESULTS_LOADED,
  SAVE_MY_MOVIE,
  REMOVE_MY_MOVIE
 } from "../actions";

/* eslint-disable no-unused-vars */

function searchResults(state = [], action) {
  return state;
}

function myMovieList(state = [], action) {
  return state;
}

export default combineReducers({
  searchResults,
  myMovieList
});
