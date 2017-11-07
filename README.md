
### Setup
* Get your api key from the themoviedb.org
* Fork, Clone, yarn install, yarn start

### Do

### Components
* Create functional components as defined by comments such as  {/*  <Navigation>   */}
XX Import and use components in App.js
XX Navigation.js
XX UserProfile.js

### State
* In state.js file
XX Create our state object with properties
    XX searchResults: []
    XX myMovieList: []
XX export state object

### Reducers
In reducers/index.js
X Create reducers functions for all state
XX Parameters - state, action
XX Remember default value
XX Import combineReducers from redux
XX Combine reducers and export


### Create Reducers
XX myMovieList
    X Look for the action “MY_MOVIE_LIST_LOADED”
    X return the value
XX searchResults
    X Look for the action “SEARCH_RESULTS_LOADED”
    X return the value

### Store
XX Create our standard store.js file
XX Use redux-thunk middleware
XX Import reducers
XX create store and export

### index.js
XX import Provider and wrap App
XX import store and assign to store prop

### Actions
X remember to export your actions
X loadMyMovieList()
    X type = “LOAD_MY_MOVIE_LIST”
    X make fetch call to “/movies”
    X on complete, dispatch to myMovieListLoaded(movies)

X myMovieListLoaded(movies)
    X type = “MY_MOVIE_LIST_LOADED”
    * value = movies

X loadSearch(searchTerm)
    X type = “LOAD_SEARCH”
    X make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    X be sure to put your api key
    X on complete, dispatch to searchLoaded(movies)

X searchLoaded(movies)
    X type = “SEARCH_RESULTS_LOADED”
    X value = make sure to assign the value of movies.results to get the array of movies from movie db


X saveMyMovie(movie)
    X make fetch POST to “/movies”
    X on complete dispatch to loadMyMovieList()    

X removeMyMovie(id)
    X make a fetch DELETE to “/movies/” + id
    X on complete dispatch to loadMyMovieList()

////////

### Create Containers
* import connect from react-redux
* mapStateToProps
* mapDispatchToProps
* connect and export

-->
SearchBoxContainer.js
AppContainer.js
ListToggleContainer.js


### SearchBoxContainer.js
XX import SearchBox
XX import action `loadSearch`
XX mapDispatchToProps for this action

XX Determine which props to map to based on the props that are already coded into the SearchBox component

### AppContainer.js
XX import App
XX import action `loadMyMovieList`
XX mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
XX mapDisptachToProps for `loadMyMovieList`

### ListToggleContainer
XX import ListToggle
XX import action `saveMyMovie` and `removeMyMovie`
XX mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
XX Change Item.js to use ListToggleContainer instead of ListToggle

### SearchBox.js
XX In the constructor assign a state property with an object with key “searchTerm”, set to blank string “”

XX Add onChange to the input element

XX on change setState for searchTerm to the value from the input

### Item.js
XX Switch out use of ListToggle for use of ListToggleContainer

### App.js
XX Add componentDidMount method and call loadMyMovieList in here.

XX Switch out use of SearchBox for use of SearchBoxContainer

XX Add PropTypes for searchResults and myMovieList

### index.js
XX Switch out use of App for AppContainer

### Points
* Base - 25
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
