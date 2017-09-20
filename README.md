
<<<<<<< HEAD
### Setup - Ericka Emery
* !DONE * Get your api key from the themoviedb.org
* !DONE * Fork, Clone, yarn install, yarn start

### Do

### Components
* !DONE * Create functional components as defined by comments such as  {/*  <Navigation>   */}
* !DONE * Import and use components in App.js
* !DONE * Navigation.js
* !DONE * UserProfile.js

### State
* !DONE * In state.js file
* !DONE * Create our state object with properties
* !DONE     * searchResults: []
* !DONE     * myMovieList: []
* !DONE * export state object

### Reducers
* In reducers/index.js
* !DONE * Create reducers functions for all state
* !DONE * Parameters - state, action
* !DONE * Remember default value
* !DONE * Import combineReducers from redux
* !DONE * Combine reducers and export

### Create Reducers
* !DONE * myMovieList
* !DONE     * Look for the action “MY_MOVIE_LIST_LOADED”
* !DONE     * return the value
* !DONE * searchResults
* !DONE     * Look for the action “SEARCH_RESULTS_LOADED”
* !DONE     * return the value

### Store
* !DONE * Create our standard store.js file
* !DONE * Use redux-thunk middleware
* !DONE * Import reducers
* !DONE * create store and export
=======
### Setup
* Get your api key from the themoviedb.org
* Fork, Clone, yarn install, yarn start, yarn add redux, yarn add react-redux

*API Key (v3 auth)*

d8d7a40b695fbf17b3b566dd016ffa2b

*API Read Access Token (v4 auth)*

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQ3YTQwYjY5NWZiZjE3YjNiNTY2ZGQwMTZmZmEyYiIsInN1YiI6IjU5YmYzM2MyYzNhMzY4MzAwZTAwYTcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rsb-kCZ_Ck-aRenQ2_1JT2FrIflC-Zp55_d1tRJq2g

*Example API Request*

https://api.themoviedb.org/3/movie/550?api_key=d8d7a40b695fbf17b3b566dd0

### Do

### Components - DONE
* Create functional components as defined by comments such as  {/*  <Navigation>   */} - DONE
* Import and use components in App.js - DONE
* Navigation.js - DONE
* UserProfile.js - DONE

### State - DONE
* In state.js file
* Create our state object with properties - DONE
    * searchResults: [] - DONE
    * myMovieList: [] - DONE
* export state object - DONE

### Reducers
* In reducers/index.js
* Create reducers functions for all state - DONE
* Parameters - state, action - DONE
* Remember default value - DONE
* Import combineReducers from redux - DONE
* Combine reducers and export - DONE

### Create Reducers - DONE
* myMovieList - DONE
    * Look for the action “MY_MOVIE_LIST_LOADED”
    * return the value
* searchResults - DONE
    * Look for the action “SEARCH_RESULTS_LOADED”
    * return the value

### Store
* Create our standard store.js file - DONE
* Use redux-thunk middleware
* Import reducers - DONE
* create store and export - DONE
>>>>>>> 81061af5c13c4008cf74aa7b76b3037ebb2a1f58

### index.js 
* !DONE * import Provider and wrap App 
* !DONE * import store and assign to store prop

### Actions
* remember to export your actions
* !DONE * loadMyMovieList()
* !DONE    * type = “LOAD_MY_MOVIE_LIST”
* !DONE    * on complete, dispatch to myMovieListLoaded(movies)

* !DONE* myMovieListLoaded(movies)
* !DONE    * type = “MY_MOVIE_LIST_LOADED”
* !DONE    * value = movies 

* !DONE* loadSearch(searchTerm)
* !DONE    * type = “LOAD_SEARCH”
* !DONE    * make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
* !DONE    * be sure to put your api key
* !DONE   * on complete, dispatch to searchLoaded(movies)
 <!-- What about searchTerm needs to change in api url?  -->


* !DONE * searchLoaded(movies)
    * type = “SEARCH_RESULTS_LOADED”
    * value = make sure to assign the value of movies.results to get the array of movies from movie db
    
* !DONE * saveMyMovie(movie)
    * make fetch POST to “/movies”
    * on complete dispatch to loadMyMovieList()

* !DONE * removeMyMovie(id)
    * make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()


### Create Containers
* import connect from react-redux
* mapStateToProps
* mapDispatchToProps
* connect and export

### SearchBoxContainer.js **DONE**
* import SearchBox
* import action `loadSearch`
* mapDispatchToProps for this action
* Determine which props to map to based on the props that are already coded into the SearchBox component

### AppContainer.js **DONE**
* import App
* import action `loadMyMovieList`
* mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
* mapDisptachToProps for `loadMyMovieList`

### ListToggleContainer **DONE**
* import ListToggle
* import action `saveMyMovie` and `removeMyMovie`
* mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
* Change Item.js to use ListToggleContainer instead of ListToggle

### SearchBox.js
* In the constructor assign a state property with an object with key “searchTerm”, set to blank string “”
* Add onChange to the input element
* on change setState for searchTerm to the value from the input
<!-- Save for the end -->

### Item.js
* Switch out use of ListToggle for use of ListToggleContainer

### App.js
* Add componentDidMount method and call loadMyMovieList in here.
<!-- where does the action exist in app.js? remember it came in as mapdispatch to props, where do components get anything from? MDTP inline?????  -->
* Switch out use of SearchBox for use of SearchBoxContainer
* Add PropTypes for searchResults and myMovieList

### index.js
* Switch out use of App for AppContainer

### Points
* Base - 25 
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
