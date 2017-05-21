
export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST"

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
      value
    });
    fetch("/movies")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(myMovieListLoaded(data));
    })
    .catch(myMovieListError());
  };
}

export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED"

export function myMovieListLoaded(){
  return {
    
  };
}
