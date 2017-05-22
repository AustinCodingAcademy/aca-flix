export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("https://api.themoviedb.org/3/movie/550?api_key=30cab9eeeac7e487871523e394c7ef39")
      .then((response) => {
        console.log("respone was received in actions", response);
        return response.json();
      })
      .then((data) => {
        dispatch(myMovieListLoaded(data));
      })
      .catch((err) => {
        console.log("There was an error", err);
      });
    // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
    // * make fetch call to “/movies”
    // * on complete, dispatch to myMovieListLoaded(movies)
  };
}

export const LOAD_SEARCH_RESULTS = "LOAD_SEARCH_RESULTS";

export function loadSearchResults(searchTerm) {
  return (dispatch) => {
    dispatch({
      type: LOAD_SEARCH_RESULTS,
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=30cab9eeeac7e487871523e394c7ef39")
    .then((response) => {
      console.log("LOAD_SEARCH_RESULTS", response);
      return response.json();
    })
    .then((movies) => {
      dispatch(searchLoadedMovies(movies));
    })
    .catch((err) => {
      console.log("Uh-oo", err);
    });
  };
}

export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";

export function searchResultsLoaded(results) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: results
  };
}

export function searchLoadedMovies(movies) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: movies.results
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}
//
// * saveMyMovie(movie)
//     * make fetch POST to “/movies”
//     * on complete dispatch to loadMyMovieList()
