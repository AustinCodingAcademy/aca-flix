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
