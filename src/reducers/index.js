import { combineReducers } from 'redux';

const searchResults = (state = [], action) => {
    if(action.type === 'SEARCH_RESULTS_LOADED'){
        return action.value;
    }
        return state;
    }


const myMovieList = (state = [], action) => {
            console.log("ACTION:", action)

    if(action.type === 'MY_MOVIE_LIST_LOADED'){
        // console.log("ACTION.VALUE:", action.value)
        return action.value;
    }
        return state;
    }


export default combineReducers({
    searchResults,
    myMovieList
})