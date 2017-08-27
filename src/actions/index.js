const key = 'fa4e7cb9f6528d60c20cf658c88a63f7';

export function loadMyMovieList() {
  return (dispatch) => {
    dispatch({type: "LOAD_MY_MOVIE_LIST"})
    fetch('/movies')
    .then(response => response.json())
    .then(json => dispatch(myMovieListLoaded(json)))
    .catch(error => console.log(error))
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
    dispatch({type: "LOAD_SEARCH"})
    fetch('http://api.themoviedb.org/3/search/multi?query=' + searchTerm + '&api_key=' + key)
    .then(response => response.json())
    .then(json => dispatch(searchLoaded(json)))
    .catch(error => console.log(error))
  }
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  }
}

export function saveMyMovie(movie) {
  return (dispatch) => {
    fetch('./movies', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    })
    .then(() => dispatch(loadMyMovieList()))
    .catch(error => console.log(error))
  }
}

export function removeMyMovie(id) {
  return (dispatch) => {
    fetch('./movies/' + id, {method: 'DELETE'})
    .then(() => dispatch(loadMyMovieList()))
    .catch(error => console.log(error))
  }
}
