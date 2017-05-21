/* Load movies with fetch call */

export function loadMovieListFetch() {
  return function (dispatch) {
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
  };
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

export function loadSearchTermFetch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });

    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=ed8a34bb0283710553888bb7ef276675`)
 .then((response) => {
   return response.json();
 }).then((movies) => {
   dispatch(searchLoaded(movies));
 });

  };
}

export function updateSearchTerm(searchTerm) {
  return {
    type: "UPDATE_SEARCH_TERM",
    value: searchTerm
  };
}

export function loadSearch() {
  return loadSearchTermFetch;
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  };
}

export function saveMyMovie(movie) {
  fetch("./movies", {
    type: "POST",
    body: movie
  }).then((dispatch) => {
    dispatch(loadMovies());
  });
}


export function removeMyMovie(id) {
  fetch(`/movies/${id}`, {
    type: "DELETE"
  }).then((dispatch) => {
    dispatch(loadMovies());
  });
}
