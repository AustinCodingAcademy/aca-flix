import { connect } from "react-redux";
import App from "../App";
import { loadMyMovieList } from "../actions";

function mapStatetoProps(state){
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    }
}

export default connect(mapStatetoProps)(App);