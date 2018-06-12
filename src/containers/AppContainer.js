import { connect } from "react-redux";
import App from "../App.js";
import {loadMyMovieList} from "../actions";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: (myMovieList) => {
      dispatch(loadMyMovieList(myMovieList));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
