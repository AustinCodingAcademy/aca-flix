// url and api
// https://api.themoviedb.org/3/movie/550?api_key=30cab9eeeac7e487871523e394c7ef39
import "whatwg-fetch";

export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";
export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";
export const LOAD_SEARCH = "LOAD_SEARCH";
export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";
export const SAVE_MY_MOVIE = "SAVE_MY_MOVIE";
export const REMOVE_MY_MOVIE = "REMOVE_MY_MOVIE";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("/movies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => dispatch(myMovieListLoaded(movies)))
      .catch((err) => dispatch("Error :", err));
    // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}

export function loadSearch(searchTerm) {
  return (dispatch) => {
    dispatch({
      type: LOAD_SEARCH
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=30cab9eeeac7e487871523e394c7ef39")
    .then((response) => {
      return response.json();
    })
    .then((movies) => dispatch(searchLoaded(movies)))
    .catch((err) => dispatch("Error :", err));
  };
}

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
    .then(() => dispatch(loadMyMovieList()));
  };

}

export function removeMyMovie(id) {
  return (dispatch) => {
    fetch("/movies/" + id, {
      method: "DELETE"
    })
    .then(() => dispatch(loadMyMovieList()));
  };
}


/*

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
    fetch("http://localhost:4001/products")
    .then((response) => {
      console.log("execute when loaded", response);
      return response.json();
    })
    .then((data) => {
      dispatch(productLoadSuccess(data));
    }).catch((err) => {
      dispatch(productLoadFailure());
      console.log("Oops, an error happened.", err);
    });
  };
}

*/
