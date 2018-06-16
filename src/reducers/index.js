import { combineReducers } from "redux";

function searchResults(state = [], action) {
  // if (action.type === "CONTACTS_LOADED") {
  //   return action.value;
  // }
  // if (action.type === "CONTACT_CREATED") {
  //   return [...state, action.value];
  // }
  return state;
}

function myMovieList(state = [], action) {
  // if (action.type === "CONTACTS_LOADED") {
  //   return action.value;
  // }
  // if (action.type === "CONTACT_CREATED") {
  //   return [...state, action.value];
  // }
  return state;
}

const rootReducer = combineReducers({
  searchResults,
  myMovieList,
});
export default rootReducer;
