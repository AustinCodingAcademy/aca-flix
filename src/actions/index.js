export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";
export const MY_MOVIE_LIST = "MY_MOVIE_LIST_LOADED";
export const LOAD_SEARCH = "LOAD_SEARCH";
export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";
import "whatwg-fetch";

export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: LOAD_MY_MOVIE_LIST
    });
    fetch("/movies")
    .then((response) => {
      return response.json();
    }).then((movies) => {
      dispatch(myMovieListLoaded(movies));
    });
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST,
    value: movies
  };
}

export function loadSearch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: LOAD_SEARCH
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=f6b2ddbf98050f5386802279758638f2")
    .then((response) => {
      return response.json();
    }).then((movies) => {
      dispatch(searchLoaded(movies));
    });
  };
}

export function searchLoaded(movies) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: movies.results
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => {
      dispatch(loadMyMovieList());
    });
  };
}

export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then(() => dispatch((loadMyMovieList())));
  };
}
