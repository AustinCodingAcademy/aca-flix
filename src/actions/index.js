export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("/movies")
    .then(res => dispatch(myMovieListLoaded(res.body.json())))
    .catch(err => myMovieListError(err));
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(res) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    payload: res
  };
}

export const MY_MOVIE_LIST_ERROR = "MY_MOVIE_LIST_ERROR";

export function myMovieListError(err) {
  return (dispatch) => {
    dispatch({
      type: MY_MOVIE_LIST_ERROR,
      error: err
    });
  };
}

export const LOAD_SEARCH_TERM = "LOAD_SEARCH_TERM";

export function loadSearchTerm(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH_TERM"
    });
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=13b8a64275811d244ae2869af10f60d7&query=${searchTerm}`)
    .then((response) => {
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
  // const myMovies = movies.results.map(movie => {
  //   return { ...movie, isMyMovie: false };
  // });
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
}

export const SAVE_FAVORITE_MOVIE = "SAVE_FAVORITE_MOVIE";

export function saveFavoriteMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    })
    .then(() => dispatch(loadMyMovieList()));
  };
}

export const TOGGLE_FAVORITE_MOVIE = "TOGGLE_FAVORITE_MOVIE";

export function toggleFavoriteMovie(movie) {
  return {
    type: TOGGLE_FAVORITE_MOVIE,
    movie
  };
}

export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

export function removeFavoriteMovie(id) {
  fetch(`/movies/${id}`, {
    type: "DELETE"
  })
  .then((dispatch) => {
    dispatch(loadMyMovieList());
  });
}
