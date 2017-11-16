import { connect } from "react-redux";
import App from "../App";
import { LoadMyMovieList } from "../actions";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LoadMyMovieList: function () {
      dispatch(LoadMyMovieList());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
