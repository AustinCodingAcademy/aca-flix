/* ### Actions
https://onsen.io/blog/react-state-management-redux-store/

* remember to export your actions
* loadMyMovieList()
    * type = “LOAD_MY_MOVIE_LIST”
    * make fetch call to “/movies”
    * on complete, dispatch to myMovieListLoaded(movies)
* myMovieListLoaded(movies)
    * type = “MY_MOVIE_LIST_LOADED”
    * value = movies
* loadSearch(searchTerm)
    * type = “LOAD_SEARCH”
    * make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    * be sure to put your api key
    * on complete, dispatch to searchLoaded(movies)
* searchLoaded(movies)
    * type = “SEARCH_RESULTS_LOADED”
    * value = make sure to assign the value of movies.
      results to get the array of movies from movie db
* saveMyMovie(movie)
    * make fetch POST to “/movies”
    * on complete dispatch to loadMyMovieList()
* removeMyMovie(id)
    * make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()
    */

export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";
export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST
    });

  //  fetch("https://api.themoviedb.org/3/movie/550?api_key=22ca1401294bb58aee9c072202b1f70e")
    fetch("/movies")
     .then((response) => {
       console.log("movie api fetched", response);
       return response.json();
     })
     .then((data) => {
      // console.log("json recieved", data)
        dispatch(myMovieListLoaded(data));
     })
     .catch((err) => {
       LoadMyMovieError();
       console.log("oop, load error LM");
     });
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";
export function myMovieListLoaded(movies) {
  return {

    type: MY_MOVIE_LIST_LOADED,
    value: movies

  };
}

/* ########################## */
export const LOAD_SEARCH = "LOAD_SEARCH";
export function loadSearch(searchTerm) {
  return (dispatch) => {
    dispatch({
      type: LOAD_SEARCH
    });
console.log("search term: ", searchTerm)
  fetch("https://api.themoviedb.org/3/search/multi?query=" + searchTerm + "&api_key=22ca1401294bb58aee9c072202b1f70e")
  //  fetch("/movies")
     .then((response) => {
       console.log("search movie api fetched", response);
       return response.json();
     })
     .then((data) => {
       console.log("search json recieved", data);
       dispatch(searchLoaded(data.results));
     })
     .catch((err) => {
       dispatch(searchLoadedError());
       console.log("oop, search error LS ", err);
     });
  };
}

/* ################## */
export const SEARCH_RESULTS_LOADED = "SEARCH_RESULTS_LOADED";
function searchLoaded(movies) {
  return {
    type: SEARCH_RESULTS_LOADED,
    value: movies
  };
}

/* ################## */
export const SAVE_MY_MOVIE = "SAVE_MY_MOVIE";
export function saveMyMovie(movies) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movies)
    })
    .then(() => dispatch(loadMyMovieList()));
  };
}

/* ############################# */
export const REMOVE_MY_MOVIE = "REMOVE_MY_MOVIE";
export function removeMyMovie(id) {
  fetch(`/movies/${id}`, {
    type: "DELETE"
  })
  .then((dispatch) => {
    dispatch(loadMyMovieList());
  });
}

/* ############################# */
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export function updateSearchTerm(searchTerm) {
  return {
    type: "UPDATE_SEARCH_TERM",
    value: searchTerm
  };
}

/* ############################# */
/* ############################# */
/* ###### ERRORS  ########### */
/* ############################# */
/* ############################# */
export const MY_MOVIE_LIST_ERROR = "MY_MOVIE_LIST_ERROR";
export function myMovieListError() {
  return (dispatch) => {
    dispatch({
      type: MY_MOVIE_LIST_ERROR
    });
  };
}



export const LOAD_MY_MOVIE_ERROR = "LOAD_MY_MOVIE_ERROR";
export function LoadMyMovieError() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_ERROR
    });
  };
}



export const SEARCH_LOADED_ERROR = "SEARCH_LOADED_ERROR";
export function searchLoadedError() {
  return (dispatch) => {
    dispatch({
      type: SEARCH_LOADED_ERROR
    });
  };
}
