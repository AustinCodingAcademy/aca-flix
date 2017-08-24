import { connect } from "react-redux";
import { loadMyMovieList } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
};


const mapDispatchToProps = dispatch => {
  return {
    loadMyMovieList: () => {
      dispatch(loadMyMovieList());
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;