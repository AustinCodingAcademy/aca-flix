const apiKey = '95aa21d6769638ba222129e206716338';

export function loadMyMovieList() {
    // type = “LOAD_MY_MOVIE_LIST”
    // make fetch call to “/movies”
    // on complete, dispatch to myMovieListLoaded(movies)
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
    // type = “MY_MOVIE_LIST_LOADED”
    // value = movies
    return {
      type: "MY_MOVIE_LIST_LOADED",
      value: movies
    }
}
export function loadSearch(searchTerm) {
    // type = “LOAD_SEARCH”
    // make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    // be sure to put your api key
    // on complete, dispatch to searchLoaded(movies)
    return function (dispatch) {
      dispatch({
        type: "LOAD_SEARCH"
      });
      fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=" + apiKey)
      .then( (response) => {
        return response.json();
      }).then((movies) => {
        dispatch(searchLoaded(movies));
      });
    };
}
export function searchLoaded(movies) {
    // type = “SEARCH_RESULTS_LOADED”
    // value = make sure to assign the value of movies.results to get the array of movies from movie db
    return {
      type: "SEARCH_RESULTS_LOADED",
      value: movies.results
    }
}
export function saveMyMovie(movie) {
    // make fetch POST to “/movies”
    // on complete dispatch to loadMyMovieList()
    return function (dispatch) {
      dispatch({
        type: "SAVE_MY_MOVIE"
      });
      fetch("/movies", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(movie)
      })
      .then( (response) => {
        return response.json();
      }).then(() => dispatch(loadMyMovieList()));
    };
}
export function removeMyMovie(id) {
    // make a fetch DELETE to “/movies/” + id
    // on complete dispatch to loadMyMovieList()
    return function (dispatch) {
      dispatch({
        type: "SAVE_MY_MOVIE"
      });
      fetch("/movies/" + id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      .then( (response) => {
        return response.json();
      }).then(() => dispatch(loadMyMovieList()));
    };
}