

// Action to load the movie list
export function loadMyMovieList() {
  return function (dispatch) {
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


// Action to load the search function
export function loadSearch(searchTerm) {
  return function (dispatch) {
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=59d2a7378a939df2f21194f9ce1968fa ")
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

// Save the  movie to the  list
export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}


// Remove the movie from the list
export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies/" + id, {
      method: "DELETE",
    }).then(() => dispatch(loadMyMovieList()));
  };
}
