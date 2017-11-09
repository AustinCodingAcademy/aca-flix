import { connect } from "react-redux";
import App from "../App";
import { loadMyMovieList } from "../actions";

function mapStateToProps(state) {
  return {
    myMovieList: state.myMovieList,
    searchResults: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList(movies) {
      dispatch(loadMyMovieList(movies));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
