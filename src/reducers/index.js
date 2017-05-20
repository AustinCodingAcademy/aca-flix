import {combineReducers} from "redux";
import MY_MOVIE_LIST_LOADED from "../actions";
import SEARCH_RESULTS_LOADED from "../actions";



function searchResults(state = [], action) {
  if (action.type === MY_MOVIE_LIST_LOADED) {
    // return action.;
  }
  return state;
}

function myMovieList(state = [], action) {
  if (action.type === SEARCH_RESULTS_LOADED) {
    // return action.;
  }
  return state;
}


const rootReducer = combineReducers({
  searchResults,
  myMovieList
});

export default rootReducer;
