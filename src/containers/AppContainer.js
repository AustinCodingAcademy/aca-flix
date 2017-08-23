import {connect} from "react-redux";
import App from "../App";
import loadMyMovieList from "../actions/index";


function mapStateToProps(state){
  return {
    movies: state.movies,
    searchText: state.searchText
  }
}

function mapDispatchToProps(dispatch){
  return {
    setMovie:function(movies){
      dispatch(loadMyMovieList(movies));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
