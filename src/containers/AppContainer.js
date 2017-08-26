import {connect} from "react-redux";
import App from "../App";
import {loadMyMovieList} from "../actions/index";
// import {searchResults} from "../actions/index";

function mapStateToProps(state){
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadMyMovieList: function(movies) {
      let action = loadMyMovieList(movies);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
