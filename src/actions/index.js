
export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST"; 

export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: LOAD_MY_MOVIE_LIST
    });
    fetch("/movies")
   .then( (response) => {
     return response.json();
   }).then((movies) => {
     dispatch(myMovieListLoaded(movies));
   });
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}

export const LOAD_SEARCH = "LOAD_SEARCH"; 

export function loadSearch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: LOAD_SEARCH
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=aa036e0b0b6a388feed1fd764b648d78")
   .then( (response) => {
     return response.json();
   }).then((movies) => {
     dispatch(searchLoaded(movies));
   });
  };
}

export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";

export function searchLoaded(movies) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: movies.results
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(id)
    }).then(() => dispatch(loadMyMovieList()));
  };
}
