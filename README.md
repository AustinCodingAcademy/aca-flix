
### Setup
*x Get your api key from the themoviedb.org
*x Fork, Clone, yarn install, yarn start

### Do

### Components
*x Create functional components as defined by comments such as  {/*  <Navigation>   */}
*x Import and use components in App.js
*x Navigation.js
*x UserProfile.js

### State
*x In state.js file
*x Create our state object with properties
    * searchResults: []
    * myMovieList: []
*x export state object

### Reducers
*x In reducers/index.js
*x Create reducers functions for all state
*x Parameters - state, action
*x Remember default value
*x Import combineReducers from redux
*x Combine reducers and export

### Create Reducers
*x myMovieList
    * Look for the action “MY_MOVIE_LIST_LOADED”
    * return the value
*x searchResults
    * Look for the action “SEARCH_RESULTS_LOADED”
    * return the value

### Store
*x Create our standard store.js file
*x Use redux-thunk middleware
*x Import reducers
*x create store and export

### index.js 
*x import Provider and wrap App 
*x import store and assign to store prop

### Actions
*x remember to export your actions
*x loadMyMovieList()
    * type = “LOAD_MY_MOVIE_LIST”
    * make fetch call to “/movies”
    * on complete, dispatch to myMovieListLoaded(movies)
*x myMovieListLoaded(movies)
    * type = “MY_MOVIE_LIST_LOADED”
    * value = movies 
*x loadSearch(searchTerm)
    *x type = “LOAD_SEARCH”
    *x make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    *x be sure to put your api key
    *x on complete, dispatch to searchLoaded(movies)
*x searchLoaded(movies)
    * type = “SEARCH_RESULTS_LOADED”
    * value = make sure to assign the value of movies.results to get the array of movies from movie db
*x saveMyMovie(movie)
    * make fetch POST to “/movies”
    * on complete dispatch to loadMyMovieList()
*x  removeMyMovie(id)
    * ???? make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()

### Create Containers
*x import connect from react-redux
*x mapStateToProps
*x mapDispatchToProps
*x connect and export

### SearchBoxContainer.js
*x import SearchBox
*x import action `loadSearch`
*x mapDispatchToProps for this action
*x? Determine which props to map to based on the props that are already coded into the SearchBox component

### AppContainer.js
*x import App
*x import action `loadMyMovieList`
*x mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
*x??? mapDisptachToProps for `loadMyMovieList`

### ListToggleContainer
*x import ListToggle
*x import action `saveMyMovie` and `removeMyMovie`
*x? mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
*x Change Item.js to use ListToggleContainer instead of ListToggle

### SearchBox.js
*x In the constructor assign a state property with an object with key “searchTerm”, set to blank string “”
*x Add onChange to the input element
*x? on change setState for searchTerm to the value from the input

### Item.js
*x Switch out use of ListToggle for use of ListToggleContainer

### App.js
*x Add componentDidMount method and call loadMyMovieList in here.
*x Switch out use of SearchBox for use of SearchBoxContainer
*x?? Add PropTypes for searchResults and myMovieList

### index.js
*x Switch out use of App for AppContainer

### Points
* Base - 25 
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
