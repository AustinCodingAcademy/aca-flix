import { combineReducers } from "redux";

// Must always return state
/* eslint-disable no-unused-vars*/

import {

} from "../actions";

function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_LOADED:
      return action.value;
    default:
      return state;
  }
}

function myMovieList(state = [], action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      return action.value;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchResults,
  myMovieList
});

export default rootReducer;
