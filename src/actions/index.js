export function loadMyMovieList() {
  return function (dispatch) {
        
    fetch("http://localhost:4000/movies")
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
      console.log(searchTerm)
      fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=b8c947674156a517c10f28a87cf7c0d9`)
          .then( (response) => {
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
  
  export function saveMyMovie(movie) {
    return function (dispatch) {
          
      fetch("http://localhost:4000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(loadMyMovieList());
          });
    
    };
  }
    
  export function removeMyMovie(_id) {
    return function (dispatch) {
          
      fetch(`http://localhost:4000/movies/${_id}`, {
        method: "DELETE"
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(loadMyMovieList());
          });
    
    };
  
  }
