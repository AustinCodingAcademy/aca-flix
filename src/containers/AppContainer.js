import App from "../App";
import {connect} from "react-redux";
import {loadMyMovieList} from "../actions";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList() {
      const action = loadMyMovieList();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
