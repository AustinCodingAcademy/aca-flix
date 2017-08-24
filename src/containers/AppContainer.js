import {connect} from "react-redux";
import App from "../App";
import {loadMyMovieList} from "../actions/index";


function mapStateToProps(state){
  return {
    movies: state.movies,
    searchText: state.searchText,
    searchResults: state.searchResults,
    myMovieList: state.myMovieList,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadMyMovieList: function() {
      let action = loadMyMovieList();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
