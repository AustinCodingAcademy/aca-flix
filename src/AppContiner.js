import {connect} from "react-redux";
import App from "./App";
import "./App.css";
import {loadMovieList} from "./actions";

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    };    
}

function mapDispatchToProps(dispatch) {
    return {
        loadMyMovieList: function(movies) {
            dispatch(loadMyMovieList(movies));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);