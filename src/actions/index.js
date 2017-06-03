import "whatwg-fetch";

export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("/movies")
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      dispatch(myMovieListLoaded(movies));
    })
    .catch((err) =>
      dispatch("Error :", err)
    );
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    movies
  };
}

export const LOAD_SEARCH = "LOAD_SEARCH";

export function loadSearch(searchTerm) {
  return (dispatch) => {
    dispatch({
      type: LOAD_SEARCH
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=43fbef98c668a6779d17352889e340d5")
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      dispatch(searchLoaded(movies));
    })
    .catch((err) =>
      dispatch("Error :", err)
    );
  };
}

export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";

export function searchLoaded(movies) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: movies.results
  };
}

export function saveMyMovie() {
  return (dispatch) => {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify()
    })
    .then(() => {
      dispatch(loadMyMovieList());
    })
    .catch((err) =>
      dispatch("Error :", err)
    );
  };
}

export function removeMyMovie(id) {
  return (dispatch) => {
    fetch("/movies/" + id, {
      method: "DELETE",
    })
    .then(() => {
      dispatch(loadMyMovieList());
    })
    .catch((err) =>
      dispatch("Error :", err)
    );
  };
}
