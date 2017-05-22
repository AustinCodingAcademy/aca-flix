export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function loadMyMovieList(movies) {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST
    });

    fetch("/movies")
      .then(() => dispatch(myMovieListLoaded(movies)));
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}
