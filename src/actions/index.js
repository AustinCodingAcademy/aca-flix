export function loadMyMovieList() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MY_MOVIELIST"
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
  return function (dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=5b2427f3632c9bbbca228eb376951103`)
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      console.log(movies);
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

export function saveMyMovie(movie) {
  return function (dispatch) {
    fetch("/movies",{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}
export function removeMyMovie(_id) {
  return function (dispatch) {
    fetch(`./movies/${_id}`,
    {method: "DELETE"},
  ).then(() => dispatch(loadMyMovieList()));
    
  };
}
