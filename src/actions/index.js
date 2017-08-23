const apiKey = "b130452da9fef70fea572ae841e97864";

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({type: "LOAD_MY_MOVIE_LIST"})

    fetch('/movies')
    .then(res => res.json())
    .then(json => dispatch(myMovieListLoaded(json)))
    .catch(err => console.log(err));
  }
}

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  }
}

export function loadSearch(searchTerm) {
  return (dispatch) => {
    dispatch({type:"LOAD_SEARCH"});

    fetch('https://api.themoviedb.org/3/search/multi?query=' + searchTerm + '&api_key=' + apiKey)
    .then(res => res.json())
    .then(json => dispatch(searchLoaded(json)))
    .catch(err => console.log(err));
  }
}

export function searchLoaded(movies) {
  console.log('movies:', movies.results);
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  }
}

export function saveMyMovie(movie) {
  return (dispatch) => {
    fetch('/movies', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    })
    .then(() => dispatch(loadMyMovieList()))
    .catch(err => console.log(err));
  }
}

export function removeMyMovie(id) {
  return (dispatch) => {
    fetch(`/movies/${id}`, {method: 'DELETE'})
    .then(() => dispatch(loadMyMovieList()))
    .catch(err => console.log(err));
  }
}

