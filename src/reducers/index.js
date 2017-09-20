import {combineReducers} from 'redux';

// function users(state = [],action) {
//   if (action.type === "USERS_LOADED") {
//     return action.value;
//   }
//   return state;
//  }
 
 function searchResults (state = [], action) {
     return state;
 }

 function  myMovieList (state = [], action) {
    return state;
}

const rootReducer = combineReducers({
 users,searchText,currentUser
});
export default rootReducer;