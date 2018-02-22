export function loadMyMovieList() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_MY_MOVIES"
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
      type: "MY_MOVIES_LOADED",
      value: movies
    };
   }

   export function loadSearch(searchTerm) {
    return function (dispatch) {
      dispatch({
        type: "LOAD_SEARCH"
      });
      fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=13e0c62bad1402001b0e92521fe8f413")
      .then( (response) => {
        return response.json();
      }).then((movies) => {
        dispatch(searchLoadedMovies(movies));
      });
    };
   }
   export function searchLoadedMovies(movies) {
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
   export function removeMyMovie(id) {
    return function (dispatch) {
      fetch("/movies/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
      }).then(() => dispatch(loadMyMovieList()));
    };
   }