//  MOVIELISTMOVIELISTMOVIELISTMOVIELISTMOVIELISTMOVIELISTMOVIELISTMOVIELIST
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



//  LOADSEARCHLOADSEARCHLOADSEARCHLOADSEARCHLOADSEARCHLOADSEARCHLOADSEARCHLOAD
export function loadSearch(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
    fetch("https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=4e7e4ac8e31254eb6c0a9531f3093321")
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
    value: movies.results
  };
}



//  SAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIESAVEMOVIE
export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "", 
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function () {
      dispatch(loadMyMovieList());
    });
  };
}


//  DELETEMOVIESDELETEMOVIESDELETEMOVIESDELETEMOVIESDELETEMOVIESDELETEMOVIESDELETEMOVIES
//  not sure if this is right
export function removeMyMovie(id) {
  return function (dispatch) {
    fetch("/movies" + id, {
      method: "DELETE", 
    }).then(function (res) {
      return res.json();
    }).then(function () {
      dispatch(loadMyMovieList());
    });
  };
}
