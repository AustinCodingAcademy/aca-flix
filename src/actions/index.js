export function loadMyMovieList(){
  return function (dispatch) {
    dispatch({
      type:"LOAD_MY_MOVIE_LIST"
    });
    fetch("/movies")
    .then( (response) => {
      return response.json();
    }).then((mov) => {
      dispatch(myMovieListLoaded(mov));
    });
  };
  }

export function myMovieListLoaded(movies){
  return {
    type:"MY_MOVIE_LIST_LOADED",
    value: movies
  }
}

export function loadSearch(searchTerm){
  return function (dispatch) {
    dispatch({
      type:"LOAD_SEARCH"
    });
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=feb25d6350fd7f1d5591f5c8a1efbeb2`)
    .then( (response) => {
      let APIresults = response.json();
      console.log("API returned: ",APIresults);
      return APIresults;
    }).then((movies) => {
      //debugger;
      dispatch(searchLoaded(movies)); //this hits
    });
  };
  }

export function searchLoaded(movies){
  //debugger;
  return {
    type:"SEARCH_RESULTS_LOADED",
    value: movies.results //this hits
  }
}

export function saveMyMovie(movie){
  return function (dispatch) {
    const webRequestPromise = fetch("/movies", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(movie)
   }).then(() => {
     dispatch(loadMyMovieList());
   });
  };
}

export function removeMyMovie(id){
  return function (dispatch) {
    const webRequestPromise = fetch("/movies", { //instructions say "make a fetch DELETE to “/movies/” + id"
     method: "DELETE",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(id) //is this where id should go?
   }).then(() => {
     dispatch(loadMyMovieList());
   });
  };
}
