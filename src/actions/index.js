export function myMovieListLoaded(movies){
  return {
      type: "MY_MOVIE_LIST_LOADED",
      value: movies
  };
}

export function searchLoaded(movies){
  return {
      type: "SEARCH_RESULTS_LOADED",
      value: movies.results
  };
}

export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIE_LIST"
    });

    fetch("/movies")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(myMovieListLoaded());
    });
  };
}

export function loadSearch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });

    fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=d8d7a40b695fbf17b3b566dd016ffa2b")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(searchLoaded());
    });
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {

    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then((users) => {
      dispatch(loadMyMovieList());
    });
  };
}

export function removeMyMovie(movie) {
  return function (dispatch) {

    fetch("“/movies/” + id", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then((users) => {
      dispatch(loadMyMovieList());
    });
  };
}

// Should second then ref users, movies, or both?
