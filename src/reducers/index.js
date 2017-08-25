import {combineReducers} from "redux";

function myMovieList(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
}

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
}

// function loadMyMovieList(state = [], action) {
//   if (action.type === "LOAD_MY_MOVIE_LIST") {
//     return state;
//   }
// }
const rootReducer = combineReducers({myMovieList, searchResults});
export default rootReducer;
