export function loadMyMovieList(){
  return function(dispatch) {
    fetch('/movies')
    .then((response) => {
      return response.json();
    }).then((movies) => {
      dispatch(myMovieListLoaded(movies));
    })
  }
}
  export function myMovieListLoaded(movies) {
    return {
    type:"MY_MOVIE_LIST_LOADED",
    value: movies
  }
}

export function loadSearchTerm(searchTerm) {
  console.log(searchTerm);
  return function(dispatch) {
    dispatch({
      type: "LOAD_SEARCH"
    });
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=602fb8f9f8ec35b8f1e696b41b7fa15d`)
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(searchLoaded(movies));
    });

  }
}

export function updateSearchTerm(searchTerm) {
  return {
    type: "UPDATE_SEARCH_TERM",
    value: searchTerm
  }
}


export function searchLoaded(movies) {
  return {
    type:"SEARCH_RESULTS_LOADED",
    value: movies
  }
}

export function saveMyMovie(movies) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movies)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

export function removeMyMovie(id) {
  fetch(`/movies/${id}`, {
    type: "DELETE"
  }).then((dispatch) => {
    dispatch(loadMyMovieList());
  });
}
