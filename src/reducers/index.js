import {combineReducers} from "redux";


function searchResults(state=[], action) {
  if(action.type === "SEARCH") {
    return action.value
  }
  return state;
}

function myMovieList(state=[], action) {
  if(action.type === "MY-MOVIES") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  searchResults, myMovieList
});
export default rootReducer;
