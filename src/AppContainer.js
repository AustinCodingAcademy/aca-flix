import { connect } from "react-redux";
import { loadMyMovieList } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: () => {
      const action = loadMyMovieList();
      dispatch(action);
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
