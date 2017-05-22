
export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("/movies")
    .then((response) => response.json())
    .then((data) => {
      dispatch(myMovieListLoaded(data));
    })
    .catch(myMovieListError());
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}

export const MY_MOVIE_LIST_ERROR = "MY_MOVIE_LIST_ERROR";

export function myMovieListError() {
  return (dispatch) => {
    dispatch({
      type: MY_MOVIE_LIST_ERROR
    });
  };
}

export const LOAD_SEARCH_TERM = "LOAD_SEARCH_TERM";

export function loadSearchTerm(searchTerm) {
  console.log(searchTerm);
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH_TERM"
    });
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=13b8a64275811d244ae2869af10f60d7&query=${searchTerm}`)
    .then( (response) => {
      return response.json();
    })
    .then((movies) => {
      dispatch(searchLoaded(movies));
    });

  };
}

export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";

export function updateSearchTerm(searchTerm) {
  return {
    type: "UPDATE_SEARCH_TERM",
    value: searchTerm
  };
}

export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
}

export const SAVE_MY_MOVIE = "SAVE_MY_MOVIE";

export function saveMyMovie(movies) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movies)
    })
    .then(() => dispatch(loadMyMovieList()));
  };
}

export const REMOVE_MY_MOVIE = "REMOVE_MY_MOVIE";

export function removeMyMovie(id) {
  fetch(`/movies/${id}`, {
    type: "DELETE"
  })
  .then((dispatch) => {
    dispatch(loadMyMovieList());
  });
}
