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
    case T.MY_MOVIE_LIST_ERROR:
      return [];
    case T.MY_MOVIE_LIST_LOADED:
      return action.payload;
    case T.TOGGLE_MY_MOVIE:
      const targetMovie = state.searchResults
        .filter(item =>
          item.id === action.movie.id);
      targetMovie.isMyMovie = !targetMovie.isMyMovie;
      return [
        ...state.searchResults, [state.searchResults.id === action.movie.id]: targetMovie
      ];
    default:
      return state;
  }
}



export default combineReducers({
  searchResults,
  searchTerm
});
