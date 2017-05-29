/*
### SearchBoxContainer.js
import App
import action loadMyMovieList
mapStateToProps for props searchResults and myMovieList to state of the same name
mapDisptachToProps for loadMyMovieList
*/

import {connect} from "react-redux";
import App from "../App";
import { loadMyMovieList} from "../actions";

function mapStateToProps(state) {
  console.log("appC what is the sate: ", state.searchResults)
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: () => {
   console.log("APP Container mounted here ", dispatch);
      dispatch(loadMyMovieList());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
