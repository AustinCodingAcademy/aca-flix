// This is the code section for pulling my Movie List
export function LoadMyMovieList() {
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
}

export function myMovieListLoaded(movies) {
 return {
   type: "MY_MOVIE_LIST_LOADED",
   value: movies
 };
}

// This is the code section for Searching movies
export function LoadSearch(searchTerm) {
 return function (dispatch) {
   dispatch({
     type: "LOAD_SEARCH"
   });
   fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=f999bc85e38a21c1ac1771796401ff89")
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


//Building my POST call to save my movie in the My Movies section
export function saveMyMovie(movie) {
  return function(dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
    .then((response) => {
      dispatch(LoadMyMovieList());
    });
  };
}

//Building my Delete call to remove my movie in the My Movies section
// export function removeMyMovie(id) {
//   return function(dispatch) {
//     fetch(`/movies/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(product)
//     })
//     .then((response) => {
//       dispatch(loadMyMovieList());
//     });
//   };
// }

//Building my Delete call to remove my movie in the My Movies section
export function removeMyMovie(id) {
  return function(dispatch) {
    fetch(`/movies/${id}`, {
      method: "DELETE"
    })
    .then((response) => {
      dispatch(LoadMyMovieList());
    });
  };
}
