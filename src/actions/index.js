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
  return{
      type:"MY_MOVIE_LIST_LOADED",
      value:movies
  }
}
export function loadSearch(searchTerm){
  return function (dispatch){
  dispatch({
    type:"LOAD_SEARCH"
  });
  fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=18da039951b8d9f69a46f0d0b6604c46`)
  .then( (response) => {
    return response.json();
  }).then ((movies) => {
    dispatch(searchLoaded(movies));
  });
 };
}

export function searchLoaded(movies){
  return{
  type:"SEARCH_RESULTS_LOADED",
  value:movies.results
  }
}

export function saveMyMovie(movie){
  return function (dispatch){
    dispatch({
      type:"SAVE_MY_MOVIE"
    });
      fetch("/movies", {
      method:"POST",
  })
      .then( (response) => {
        return response.json();
      }).then( (movies) => {
        dispatch(loadMyMovieList());
      });
    }
  }

export function removeMyMovie(id){
  return function (dispatch){
    dispatch({
      type:"REMOVE_MY_MOVIE"
    });
      fetch("/movies/" + id, {
        method:"DELETE",
      })
      .then( (response) => {
        return response.json();
      })
      .then ((movies) => {
        dispatch(loadMyMovieList());
      });
    }
  }
