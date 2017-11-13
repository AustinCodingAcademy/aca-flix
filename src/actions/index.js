export function loadMyMovieList(){
  return function (dispatch){
    dispatch({
      type:"LOAD_MY_MOVIE_LIST"
    });

    fetch("/movies")
    .then((response) => {
      return response.json();
    }).then(movies) => {
      dispatch(myMovieListLoaded));
    });
  };
}

export function myMovieListLoaded(movies){
  return {
    type:"MY_MOVIE_LIST_LOADED",
    value:movies
  }
}

export function loadSearch(searchTerm){
  return function (dispatch){
    dispatch({
      type:"LOAD_SEARCH"
    });

    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=4e4793ef4c137d68e5e4e4fcbbb0eaf4`)
    .then((response) => {
      return response.json();
    }).then(movies) => {
      dispatch(searchLoaded(movies));
    });
  };
}

export function searchLoaded(movies){
  return {
    type:"SEARCH_RESULTS_LOADED"
    value: movies.results;
  }
}

export function saveMyMovie(movie){
  return function (dispatch) {
    fetch("/movies", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify(movie)
       }).then(response) => {
         dispatch(loadMyMovieList());
       });
     };
}

export function removeMyMovie(id){
  return function (dispatch){
    fetch(`/movies/${id}`, {
         method: "DELETE"
  }).then(response) => {
    dispatch(loadMyMovieList());
});
};
}
