import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMyMovieList} from "./actions";
import {searchResults} from "./containers/SearchBoxContainer";
import {myMovieList} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList() {
      dispatch(loadMyMovieList());
      }
  };
}

function mapStateToProps(state){
    return{
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    }
   }
   

// export default connect(null,mapDispatchToProps)(App);
export default connect(mapStateToProps,mapDispatchToProps)(App);