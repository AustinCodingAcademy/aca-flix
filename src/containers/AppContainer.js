import App from "../App";
import { loadMyMovieList } from "../actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        loadMyMovieList:function(){
        let action = loadMyMovieList();
        dispatch(action);
      }
    };
  }

    function mapStateToProps(state) {
    return {
      searchResults: state.searchResults,
      myMovieList: state.myMovieList
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
