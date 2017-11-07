// ACTIONS TO RETRIEVE DATA

const API_KEY = "92bd2e0acc02c7e9732aa12f3e685a95";

export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIE_LIST"
    });
    fetch("/movies")
      .then((response) => {
        return response.json();
      }).then((movies) => {
        dispatch(myMovieListLoaded(movies));
      });
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
}

export function loadSearch(searchTerm) {
  console.log(searchTerm);
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
    // fetch(`https://api.themoviedb.org/3/search/multi?query=independence&api_key=92bd2e0acc02c7e9732aa12f3e685a95}
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=${API_KEY}`)
      .then((response) => {
        return response.json();
      }).then((movies) => {
        dispatch(searchLoaded(movies));
      });
  };
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results // array of movies from movie db
  };
}

// ACTIONS TO CREATE DATA

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

// ACTIONS TO REMOVE DATA

export function removeMyMovie(id) {
  return function (dispatch) {
    fetch(`/movies/${id}`, {
      method: "DELETE"
    })
      .then(() => dispatch(loadMyMovieList()));
  };
}
