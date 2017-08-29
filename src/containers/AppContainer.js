import {connect} from 'react-redux';
import {loadMyMovieList} from "./actions";
import App from "../App";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function () {
      dispatch(loadMyMovieList());
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
