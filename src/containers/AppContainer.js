import { connect } from 'react-redux';
import {loadMyMovieList} from "../actions";
import App from "../reducers/App";


function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList() {
      dispatch(loadMyMovieList());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
