/* Load movies with fetch call */

function loadMovieListFetch(dispatch) {
  dispatch({
    type: "LOAD_MY_MOVIE_LIST"
  });

  fetch("./movies")
  .then((response) => {
    return response.json();
  }).then((movies) => {
    dispatch(myMovieListLoaded(movies));
  }).catch(() => {
    dispatch(movieLoadError());
  });
}

export const MOVIE_LIST_LOAD_ERROR = "MOVIE_LIST_LOAD_ERROR";
export function movieLoadError() {
  return {
    type: MOVIE_LIST_LOAD_ERROR,
    message: "Error loading movie"
  };
}

export function loadMovies() {
  return loadMovieListFetch;
}

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
}

function loadSearchFetch(searchTerm, dispatch) {
  dispatch({
    type: "LOAD_SEARCH"
  });

  fetch("https://api.themoviedb.org/3/movie/550?api_key=ed8a34bb0283710553888bb7ef276675"
 ).then((response) => {
   return response.json();
 }).then((movies) => {
   dispatch(searchLoaded(movies));
 });
}

export function loadSearch() {
  return loadSearchFetch;
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  };
}

function saveMyMovieFetch(movie, dispatch) {
  dispatch({
    type: "POST_TO_MOVIE_LIST"
  });

  fetch("./movies")
  .then((response) => {
    return response.json();
  }).then((movies) => {
    dispatch(loadMovies(movies));
  });
}

export function saveMyMovie() {
  return saveMyMovieFetch;
}
