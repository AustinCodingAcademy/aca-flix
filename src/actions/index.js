export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIE_LIST"
    });
    fetch("/movies")
    .then( (response) => {
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
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=98127f48db795bc3427774e4bdb8bdb8`)
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(searchLoaded(movies));
    });
  };
}
export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  };
}

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

export function removeMyMovie(_id) {
  return function (dispatch) {
    fetch(`/movies/${_id}`, 
    {method: "DELETE"}
    ).then(() => dispatch(loadMyMovieList()));
    console.log("removed id", _id);
  };
}
