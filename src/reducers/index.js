<<<<<<< HEAD
import {combineReducers} from 'redux';
 
 function searchResults (state = [], action) {
    if (action.type === "MY_MOVIE_LIST_LOADED") {
        return action.value;
      }
     return state;
 }

 function myMovieList (state = [], action) {
    if (action.type === "SEARCH_RESULTS_LOADED") {
        return action.value;
      }
=======
import {combineReducers} from "redux";

function searchResults(state = [], action){
    if (action.type === "MY_MOVIE_LIST_LOADED"){
        return action.value;
    }
    return state;
}

function myMovieList(state  = [], action){
    if (action.type === "SEARCH_RESULTS_LOADED"){
        return action.value;
    }
>>>>>>> 81061af5c13c4008cf74aa7b76b3037ebb2a1f58
    return state;
}

const rootReducer = combineReducers({
<<<<<<< HEAD
 searchResults, myMovieList
=======
    searchResults,myMovieList
>>>>>>> 81061af5c13c4008cf74aa7b76b3037ebb2a1f58
});
export default rootReducer;