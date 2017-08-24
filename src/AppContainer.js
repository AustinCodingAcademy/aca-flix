import { connect } from "react-redux";
import {loadMyMovieList} from "./actions/index";
import App from "./App";
import {searchResults} from "./actions/index";


// mapDispatchToProps to Load My Movie List
function mapDispatchToProps(dispatch) {
  return {

    loadMyMovieList: function() {
      const action = loadMyMovieList();
      dispatch(action);
    }
  };
}


//mapStateToProps To load my movie list and search results
function mapStateToProps(state) {
  return {
    myMovieList: state.myMovieList,
    searchResults: state.searchResults
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
