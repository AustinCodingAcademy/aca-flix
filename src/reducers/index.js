import {combineReducers} from 'redux';


function searchResults(state=[], action){
  if (action.type === "SEARCH_RESULTS_LOADED") {
    console.log(action.value.results);
    return action.value.results;
  }
  return state;
}

function myMovieList(state=[], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED"){
    return action.value;
  }
  return state;
}

function searchTerm(state = "", action) {
  if (action.type === "UPDATE_SEARCH_TERM") {
    return action.value
  }
  return state;
}

const rootReducer = combineReducers({
searchResults,myMovieList,searchTerm
});
export default rootReducer;
