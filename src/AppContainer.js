import App from "./App";
import "./App.css";
import {connect} from "react-redux";
import {loadMyMovieList} from "./actions";


const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
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
