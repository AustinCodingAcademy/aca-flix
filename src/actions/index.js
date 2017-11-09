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
    console.log("searching");
return function (dispatch) {
    dispatch({
    type: "LOAD_SEARCH"
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=d108e9c19f551c2a97595f68a294d594")
    .then( (response) => {
    return response.json();
    }).then((movies) => {
    dispatch(searchLoaded(movies));
    });
};
}
export function searchLoaded(movies) {
    console.log("loaded");
return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
};
}

// saving/POST action ----
export function saveMyMovie(movie) {
return function (dispatch) {
    fetch("/movies", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
};
}
// DELETE ACTION ----
export function removeMyMovie(id) {
return function (dispatch) {
    fetch(("/movies/" + id), {
    method: "DELETE"
    }).then(() => dispatch(loadMyMovieList()));
};
}





