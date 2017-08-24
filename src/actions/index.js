function loadMyMovieListWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_MY_MOVIE_LIST"
  });
  
  // actual call to the API
  fetch("/movies")
  .then( (response) => {
    return response.json();
  }).then((movies) => {
    dispatch(myMovieListLoaded(movies));
  });
};

// this is the action. It needs to be exported
export function loadMyMovieList() {
  return loadMyMovieListWithFetch;
}

// this is the action that gets called when the fetch call is done. 
export function myMovieListLoaded(movies) {
 return {
   type: "MY_MOVIE_LIST_LOADED",
   value: movies
 };
}



// this is the action. It needs to be exported
export function loadSearch(searchTerm) {
  return function loadSearchWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_SEARCH"
  });
  
  // actual call to the API
  fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=2e493e89df1ef8646d13cba4a66ecb30`)
  .then( (response) => {
    return response.json();
  }).then((movies) => {
    dispatch(searchLoaded(movies));
  });
};;
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

export function removeMyMovie(id) {
 return function (dispatch) {
   fetch("/movies/" + id, {
     method: "DELETE"
   }).then(() => dispatch(loadMyMovieList()));
 };
}