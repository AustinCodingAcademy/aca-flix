import { combineReducers } from 'redux';

function myMovieList(state = [], action){
  if(action.type === "MY_MOVIE_LIST_LOADED"){
    console.log("MyMovieList", action.value)
    return action.value;
  } else {
    return state;
  }
}

function searchResults(state = [], action) {
  if(action.type === "SEARCH_RESULTS_LOADED"){
    console.log("Search Results", action.value)
    return action.value;
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  searchResults,
  myMovieList
});

export default rootReducer;
