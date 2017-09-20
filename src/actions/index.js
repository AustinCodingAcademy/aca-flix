export function myMovieListLoaded(movies){
  return {
      type: "MY_MOVIE_LIST_LOADED",
      value: movies
  };
}

export function searchLoaded(movies){
  console.log(movies);
  return {
      type: "SEARCH_RESULTS_LOADED",
      value: movies
  };
}

export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIE_LIST"
    });

    fetch("./movies")
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(myMovieListLoaded(movies));
    });
  };
}

export function loadSearch(searchTerm) {
  console.log("this is from actions",searchTerm);
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });

    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=d8d7a40b695fbf17b3b566dd016ffa2b`)
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(searchLoaded(movies.results))
    });
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {

    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then((movie) => {
      dispatch(loadMyMovieList(movie));
    });
  };
}

export function removeMyMovie(id) {
  return function (dispatch) {

    fetch("/movies/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then((movies) => {
      dispatch(loadMyMovieList(movies));
    });
  };
}
  