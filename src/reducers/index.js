import {combineReducers} from "redux";


// Reducers that carry my actions and values
function myMovieList(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return (action.value);
  }
  return state;
}

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return (action.value);
  }
  return state;
}

const rootReducer = combineReducers({
  myMovieList,
  searchResults
});


export default rootReducer;
