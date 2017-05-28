// url and api
// https://api.themoviedb.org/3/movie/550?api_key=30cab9eeeac7e487871523e394c7ef39

export const LOAD_MY_MOVIE_LIST = "LOAD_MY_MOVIE_LIST";
export const MY_MOVIE_LIST_LOADED = "MY_MOVIE_LIST_LOADED";

export function loadMyMovieList(movies) {
  return (dispatch) => {
    dispatch({
      type: LOAD_MY_MOVIE_LIST,
    });
    fetch("/movies")
      .then(() => dispatch(myMovieListLoaded(movies)));
    // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
    // * make fetch call to “/movies”
    // * on complete, dispatch to myMovieListLoaded(movies)
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: MY_MOVIE_LIST_LOADED,
    value: movies
  };
}

/*

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
    fetch("http://localhost:4001/products")
    .then((response) => {
      console.log("execute when loaded", response);
      return response.json();
    })
    .then((data) => {
      dispatch(productLoadSuccess(data));
    }).catch((err) => {
      dispatch(productLoadFailure());
      console.log("Oops, an error happened.", err);
    });
  };
}

*/


//
// * saveMyMovie(movie)
//     * make fetch POST to “/movies”
//     * on complete dispatch to loadMyMovieList()
