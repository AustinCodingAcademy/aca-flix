import { connect } from "react-redux";
import App from "../App";
import {
  loadMyMovieList
} from "../actions";

function mapStateToProps(state) {
  const {
    searchResults,
    myMovieList,
  } = state;
  return {
    searchResults,
    myMovieList,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => {
      dispatch(loadMyMovieList());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
