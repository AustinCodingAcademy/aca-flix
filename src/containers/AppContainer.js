import { connect } from "react-redux";
import App from "../App";
import {
  loadMyMovieList
} from "../actions";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadMyMovieList());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
