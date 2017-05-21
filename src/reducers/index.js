import {combineReducers} from "redux";

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
