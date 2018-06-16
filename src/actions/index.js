// * loadMyMovieList()
//     * type = “LOAD_MY_MOVIE_LIST”
//     * make fetch call to “/movies”
//     * on complete, dispatch to myMovieListLoaded(movies)
export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIE_LIST",
    });
    fetch("/movies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        dispatch(myMovieListLoaded(movies));
      });
  };
}

// * myMovieListLoaded(movies)
//     * type = “MY_MOVIE_LIST_LOADED”
//     * value = movies export function loadMyMovieList() {
export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies,
  };
}

// * loadSearch(searchTerm)
//     * type = “LOAD_SEARCH”
//     * make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
//     * be sure to put your api key
//     * on complete, dispatch to searchLoaded(movies)
export function loadSearch() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH",
    });
    fetch(
      "https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey"
    )
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        searchLoaded(movies);
      });
  };
}

// * searchLoaded(movies)
//     * type = “SEARCH_RESULTS_LOADED”
//     * value = make sure to assign the value of movies.results to get
// the array of movies from movie db
export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results,
  };
}

// * saveMyMovie(movie)
//     * make fetch POST to “/movies”
//     * on complete dispatch to loadMyMovieList()
export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      dispatch(loadMyMovieList());
    });
  };
}

// * removeMyMovie(id)
//     * make a fetch DELETE to “/movies/” + id
//     * on complete dispatch to loadMyMovieList()
export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      dispatch(loadMyMovieList());
    });
  };
}
