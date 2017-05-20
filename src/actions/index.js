

export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST
    });
    fetch("/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(myMovieListLoaded(data));
      })
      .catch(myMovieListError());
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return (dispatch) => {
    dispatch({
      type: MY_MOVIE_LIST_LOADED,
      value: movies
    });
  };
}

export const MY_MOVIE_LIST_ERROR = "MY_MOVIE_LIST_ERROR";

export function myMovieListError() {
  return {
    type: MY_MOVIE_LIST_ERROR
  };
}

export const LOAD_SEARCH = "LOAD_SEARCH";

export function loadSearch() {
  return (dispatch) => {
    dispatch({
      type: LOAD_SEARCH
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=67933ec4527bee237e9e9a41aca9bd6d")
    .then((response) => {
      return response.json();
    }).then((movies) => {
      dispatch(searchLoaded(movies));
    });
  };
}

export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";

export function searchLoaded(movies) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_RESULTS_LOADED,
      // value: movies.results
    });
  };

}
