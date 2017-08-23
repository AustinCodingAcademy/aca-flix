export function loadMyMovieList(){
  return function (dispatch){
    dispatch({
      type:"LOAD_MY_MOVIE_LIST"
    });
    fetch("/movies")
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(myMovieListLoaded(movies));
    });
  };
}
export function myMovieListLoaded(movies){
      type:"MY_MOVIE_LIST_LOADED"
      value:movies
  }
export function loadSearch(searchTerm){
  return function (dispatch){
  dispatch({
    type:"LOAD_SEARCH"
  });
  fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=18da039951b8d9f69a46f0d0b6604c46")
  .then( (response) => {
    return response.json();
  }).then ((movies) => {
    dispatch(searchLoaded(movies));
  });
 };
}

export function searchLoaded(movies){
  type:"SEARCH_RESULTS_LOADED"
  value:movies.results//not sure about this line 73 in readMe
}

export function saveMyMovie(movie){
  return function (dispatch){
    dispatch({
      type:"SAVE_MY_MOVIE"
    });
      fetch("/movies", {
      method:"post",
  })
      .then( (response) => {
        return response.json();
      }).then( (movies) => {
        dispatch(loadMyMovieList());
      });
    }
  }

// ^^^^^not sure about above and where to add post to fetch action

export function removeMyMovie(movie){
  return function (dispatch){
    dispatch({
      type:"REMOVE_MY_MOVIE"
    });
      fetch("/movies", {
        method:"delete",
      })
      .then( (response) => {
        return response.json();
      })
      .then ((movies) => {
        dispatch(loadMyMovieList());
      });
    }
  }

// ^^^^^^^^^^agin here not sure where to add delete to the action
