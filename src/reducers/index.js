
import {combineReducers} from "redux";

function searchResults(state = [], action) {
  // console.log("searchResults reducer");
  
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
}

function myMovieList(state = [], action) {
  // console.log(action);
  
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  searchResults, myMovieList
});

export default rootReducer;
