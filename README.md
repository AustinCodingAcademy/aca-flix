
### Setup
* Get your api key from the themoviedb.org

  API Key= 8391285b3c480932dc96bf13283ec832

  API Read Access Token (v4 auth)
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzkxMjg1YjNjNDgwOTMyZGM5NmJmMTMyODNlYzgzMiIsInN1YiI6IjU5OWRmNGUyYzNhMzY4N2RjNDAwMTljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FFjI1m7-wnBM_XcmkOl7eySyAoup_-4ba7aiVT1HBXA

  Example API Request
  https://api.themoviedb.org/3/movie/550?api_key=8391285b3c480932dc96bf13283ec832



* Fork, Clone, yarn install, yarn start

### Do

### Components
* Create functional components as defined by comments such as  {/*  <Navigation>   */}
* xImport and use components in App.js
* xNavigation.js
* xUserProfile.js

### State
* xIn state.js file
* xCreate our state object with properties
    * searchResults: []
    * myMovieList: []
* xexport state object

### Reducers
* xIn reducers/index.js
* xCreate reducers functions for all state
* xParameters - state, action
* xRemember default value
* xImport combineReducers from redux
* xCombine reducers and export

### Create Reducers
* xmyMovieList
    * Look for the action “MY_MOVIE_LIST_LOADED”
    * return the value
* xsearchResults
    * Look for the action “SEARCH_RESULTS_LOADED”
    * return the value

### Store
* xCreate our standard store.js file
* xUse redux-thunk middleware
* xImport reducers
* xcreate store and export

### index.js
* ximport Provider and wrap App
* ximport store and assign to store prop

### Actions
* xremember to export your actions
* xloadMyMovieList()
    * type = “LOAD_MY_MOVIE_LIST”
    * make fetch call to “/movies”
    * on complete, dispatch to myMovieListLoaded(movies)
* xmyMovieListLoaded(movies)
    * type = “MY_MOVIE_LIST_LOADED”
    * value = movies
* xloadSearch(searchTerm)
    * type = “LOAD_SEARCH”
    * make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    * be sure to put your api key
    * on complete, dispatch to searchLoaded(movies)
* xsearchLoaded(movies)
    * type = “SEARCH_RESULTS_LOADED”
    * value = make sure to assign the value of movies.results to get the array of movies from movie db
* xsaveMyMovie(movie)
    * make fetch POST to “/movies”
    * on complete dispatch to loadMyMovieList()
* xremoveMyMovie(id)
    * make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()


### Create Containers
* import connect from react-redux
* mapStateToProps
* mapDispatchToProps
* connect and export

### SearchBoxContainer.js
* ximport SearchBox
* ximport action `loadSearch`
* xmapDispatchToProps for this action
* xDetermine which props to map to based on the props that are already coded into the SearchBox component

### AppContainer.js
* ximport App
* ximport action `loadMyMovieList`
* mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
* xmapDisptachToProps for `loadMyMovieList`

### ListToggleContainer
* ximport ListToggle
* ximport action `saveMyMovie` and `removeMyMovie`
* xmapDisptachToProps for `saveMyMovie` and `removeMyMovie`
* xChange Item.js to use ListToggleContainer instead of ListToggle

### SearchBox.js
* xIn the constructor assign a state property with an object with key “searchTerm”, set to blank string “”
* xAdd onChange to the input element
* xon change setState for searchTerm to the value from the input

### Item.js
* xSwitch out use of ListToggle for use of ListToggleContainer

### App.js
* xAdd componentDidMount method and call loadMyMovieList in here.
* xSwitch out use of SearchBox for use of SearchBoxContainer
* xAdd PropTypes for searchResults and myMovieList

### index.js
* xSwitch out use of App for AppContainer

### Points
* Base - 25
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
