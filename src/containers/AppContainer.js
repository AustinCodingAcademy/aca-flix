import App from "../App";
import { loadMyMovieList } from "../actions";
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mapDisptachToProps(dispatch) {
  return {
    loadMyMovieList: (myMovieList) => {
      dispatch(loadMyMovieList(myMovieList));
    }
  };
}

export default connect(mapStateToProps,mapDisptachToProps)(App);


