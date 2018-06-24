
### Setup
* X Get your api key from the themoviedb.org  6f24f2e82189895f2331db39f36bf9e3
* X Fork, Clone, yarn install, yarn start

### Do

### Components
* X Create functional components as defined by comments in the jsx in App.js,  such as  {/*  <Navigation>   */}
* X Import and use components in App.js
* X Navigation.js
* X UserProfile.js

### State
* X In state.js file
* X Create our state object with properties
    * X searchResults: []
    * X myMovieList: []
* X export state object

### Reducers
* X In reducers/index.js
* X Create reducers functions for all state
* X Parameters - state, action
* X Remember default value
* X Import combineReducers from redux
* X Combine reducers and export

### Create Reducers
* X myMovieList
    * X Look for the action “MY_MOVIE_LIST_LOADED”
    * X return the value
* X searchResults
    * X Look for the action “SEARCH_RESULTS_LOADED”
    * X return the value

### Store
* X Create our standard store.js file
* X Use redux-thunk middleware
* X Import reducers
* X create store and export

### index.js 
* X import Provider and wrap App 
* X import store and assign to store prop

### Actions
* X remember to export your actions
* X loadMyMovieList()
    * X type = “LOAD_MY_MOVIE_LIST”
    * X make fetch call to “/movies”
    * X on complete, dispatch to myMovieListLoaded(movies)
* X myMovieListLoaded(movies)
    * X type = “MY_MOVIE_LIST_LOADED”
    * X value = movies 
* X loadSearch(searchTerm)
    * X type = “LOAD_SEARCH”
    * X make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    * X be sure to put your api key
    * X on complete, dispatch to searchLoaded(movies)
* X searchLoaded(movies)
    * X type = “SEARCH_RESULTS_LOADED”
    * X value = make sure to assign the value of movies.results to get the array of movies from movie db
* X saveMyMovie(movie)
    * X make fetch POST to “/movies”
    * X on complete dispatch to loadMyMovieList()
* X removeMyMovie(id)
    * X make a fetch DELETE to “/movies/” + id
    * X on complete dispatch to loadMyMovieList()


### Create Containers
* X import connect from react-redux
* X mapStateToProps
* X mapDispatchToProps
* X connect and export

### SearchBoxContainer.js
* X import SearchBox
* X import action `loadSearch`
* X mapDispatchToProps for this action
* X Determine which props to map to based on the props that are already coded into the SearchBox component

### AppContainer.js
* X import App
* X import action `loadMyMovieList`
* X mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
* X mapDisptachToProps for `loadMyMovieList`

### ListToggleContainer
* X import ListToggle
* X import action `saveMyMovie` and `removeMyMovie`
* X mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
* X Change Item.js to use ListToggleContainer instead of ListToggle

### SearchBox.js
* X In the constructor assign a state property with an object with key “searchTerm”, set to blank string “”
* X Add onChange to the input element
* X on change setState for searchTerm to the value from the input

### Item.js
* X Switch out use of ListToggle for use of ListToggleContainer

### App.js
* X Add componentDidMount method and call loadMyMovieList in here.
* X Switch out use of SearchBox for use of SearchBoxContainer
* X Add PropTypes for searchResults and myMovieList

### index.js
* X Switch out use of App for AppContainer

### Points
* Base - 25 
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
