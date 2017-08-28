export function loadMyMovieList() {
 return function (dispatch) {
   dispatch({
     type: "MY_MOVIE_LIST_LOADED"
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

export function loadSearch(searchTerm) {
 return function (dispatch) {

   fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=7a70f6a52ee69290d226f06e653d1985")
   .then( (response) => {
     return response.json();
   }).then((movies) => {
     dispatch(searchLoaded(movies));
   });
   dispatch({
     type: "LOAD_SEARCH"
   });
 };
}
export function searchLoaded(movies) {
 return {
   type: "SEARCH_RESULTS_LOADED",
   value: movies.results
 };
}

export function loadUsers() {
 return function (dispatch) {
   dispatch({
     type: "LOAD_USERS"
   });
   fetch("/users")
   .then( (response) => {
     return response.json();
   }).then((users) => {
     dispatch(usersLoaded(users));
   });
 };
}
export function usersLoaded(users) {
 return {
   type: "USERS_LOADED",
   value: users
 };
}
