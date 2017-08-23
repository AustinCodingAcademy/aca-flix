
^^^revisit line by line need to figure out post/delete and map functions mainly. also need to get onClick added at end of excercise




### Setup
* Get your api key from the themoviedb.org
* Fork, Clone, yarn install, yarn start

api key (v3 auth):
18da039951b8d9f69a46f0d0b6604c46


api read access token(v4 auth):
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGRhMDM5OTUxYjhkOWY2OWE0NmYwZDBiNjYwNGM0NiIsInN1YiI6IjU5OWI4MmE0YzNhMzY4MjI4YzAwNDRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EgXqUBzz4hOwu6S9aOhMjOWcIBNMyt8nMXD0YEQyBAE

example api request:
https://api.themoviedb.org/3/movie/550?api_key=18da039951b8d9f69a46f0d0b6604c46



### Do

### Components
* Create functional components as defined by comments such as  {/*  <Navigation>   */}
* Import and use components in App.js
* Navigation.js
* UserProfile.js

### State
* In state.js file
* Create our state object with properties
    * searchResults: []
    * myMovieList: []
* export state object

### Reducers
* In reducers/index.js
* Create reducers functions for all state
* Parameters - state, action
* Remember default value
* Import combineReducers from redux
* Combine reducers and export

### Create Reducers
* myMovieList
    * Look for the action “MY_MOVIE_LIST_LOADED”
    * return the value
* searchResults
    * Look for the action “SEARCH_RESULTS_LOADED”
    * return the value

### Store
* Create our standard store.js file
* Use redux-thunk middleware
* Import reducers
* create store and export

### index.js
* import Provider and wrap App
* import store and assign to store prop

### Actions
* remember to export your actions
* loadMyMovieList()
    * type = “LOAD_MY_MOVIE_LIST”
    * make fetch call to “/movies”
    * on complete, dispatch to myMovieListLoaded(movies)
* myMovieListLoaded(movies)
    * type = “MY_MOVIE_LIST_LOADED”
    * value = movies
* loadSearch(searchTerm)
    * type = “LOAD_SEARCH”
    * make fetch call to https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey
    * be sure to put your api key
    * on complete, dispatch to searchLoaded(movies)
* searchLoaded(movies)
    * type = “SEARCH_RESULTS_LOADED”
    * value = make sure to assign the value of movies.results to get the array of movies from movie db

^^^^^^^pretty much done to here more or less^^^^^^






leaving here not sure how to POST
* saveMyMovie(movie)
    * make fetch POST to “/movies”
    * on complete dispatch to loadMyMovieList()
* removeMyMovie(id)
    * make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()

^^done to here with some questions^^^^^



### Create Containers
* import connect from react-redux
* mapStateToProps
* mapDispatchToProps
* connect and export

### SearchBoxContainer.js
* import SearchBox
* import action `loadSearch`
* mapDispatchToProps for this action
* Determine which props to map to based on the props that are already coded into the SearchBox component

^^^^^needs work^^^^^



### AppContainer.js
* import App
* import action `loadMyMovieList`
* mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
* mapDisptachToProps for `loadMyMovieList`

^^^^^^needs work

### ListToggleContainer
* import ListToggle
* import action `saveMyMovie` and `removeMyMovie`
* mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
* Change Item.js to use ListToggleContainer instead of ListToggle

^^^close to done here

### SearchBox.js
* In the constructor assign a state property with an object with key “searchTerm”, set to blank string “”
^^^done^^


* Add onChange to the input element
* on change setState for searchTerm to the value from the input
^^^^not done



### Item.js
* Switch out use of ListToggle for use of ListToggleContainer

^^^^^done^^^^^


### App.js
* Add componentDidMount method and call loadMyMovieList in here.
* Switch out use of SearchBox for use of SearchBoxContainer
* Add PropTypes for searchResults and myMovieList
^^^^not sure where this goes


### index.js
* Switch out use of App for AppContainer

### Points
* Base - 25
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
