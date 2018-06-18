export function loadMyMovieList(){
    return function (dispatch) {
        dispatch({
            type: "LOAD_MY_MOVIE_LIST"
        });

        fetch("/movies")
        .then( (response) => {
            return response.json();
        }).then((movies) => {
            dispatch(myMovieListLoaded(movies));
        });
    };
};  

export function myMovieListLoaded(movies){
    return {
        type: "MY_MOVIE_LIST_LOADED",
        movies: movies
    }t
};

export function loadSearch(searchTerm){
    return function (dispatch) {
        dispatch({
            type: "LOAD_SEARCH"
        });

        fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=0dc94f449f50d8c8598f3f801426f127")
        .then( (response) => {
            return response.json();
        }).then( (movies) => {
            dispatch(searchLoaded(movies));
        });
    };
};

export function searchLoaded(movies){
    return {
        type: "SEARCH_RESULTS_LOADED",
        movies: movies.results
    }
}

export function saveMyMovie(movie){
  return function (dispatch){
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMyMovieList()));
  };
}

export function removeMyMovie(_id) {
    return function (dispatch) {
      fetch(`/movies/${_id}`, {
          method: "DELETE"
        }).then(() => dispatch(loadMyMovieList()));
    };
}


