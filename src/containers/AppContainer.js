import {connect} from 'react-redux';
import {loadMyMovieList} from "../actions";
import App from "../App";

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function() {
      let action = loadMyMovieList();
      dispatch(action);
    }
  };
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
