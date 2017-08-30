import App from "../App";
import {loadMyMovieList} from "../actions";
import {connect} from "react-redux";

function mapStateToProps(state){
  return{
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
  return state;
}

function mapDispatchToProps(dispatch) {
  return{
    loadMyMovieList: function(movies){
      let action = loadMyMovieList(movies);
      dispatch(action);
    },
  }
}

//This is the shorter way to export.
//export default connect(mapStateToProps,mapDispatchToProps)(App)

let otherFunction = connect(mapStateToProps, mapDispatchToProps);
let AppContainer = otherFunction(App)
export default AppContainer;
