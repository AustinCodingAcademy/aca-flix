
export const myMovieListLoaded = (movies) => {
    return {
      type: "MY_MOVIE_LIST_LOADED",
      value: movies
    };
  };
  
  export const loadMyMovieList = () => {
    return function (dispatch) {
      dispatch({
        type: "LOAD_MY_MOVIE_LIST"
      });
  
      fetch("/movies")
      .then((response) => response.json())
      .then((movies) => {
        dispatch(myMovieListLoaded(movies));
      });
    };
  };
  
  export const searchLoaded = (movies) => {
    return {
      type: "SEARCH_RESULTS_LOADED",
      value: movies.results
    };
  };
  
  export const loadSearch = (searchTerm) => {
    return function (dispatch) {
      fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=140524d010a99795375671d87656ea92`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch(searchLoaded(movies));
      });
    };
  };
  
  export const saveMyMovie = (movie) => {
    return function (dispatch) {
      fetch("/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      }).then((response) => {
        dispatch(loadMyMovieList());
      });
    };
  };
  
  export const removeMyMovie = (id) => {
    return function (dispatch) {
      fetch(`/movies/${id}`, {
        method: "DELETE",
      }).then((response) => {
        dispatch(loadMyMovieList());
      });
    };
  };