export function loadMyMovieList() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_MY_MOVIE_LIST"
      });
      fetch("/movies")
      .then( (response) => {
        return response.json();
      }).then((movies) => {
        // console.log("moviesloaded");
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
    return (dispatch) => {
      console.log(id);
      fetch("/movies/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify()
      }).then(() => dispatch(loadMyMovieList(2)));
    };
   }