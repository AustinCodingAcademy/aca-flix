import { connect } from 'react-redux';
import App from "../App";
import { loadMyMovieList } from "../actions";

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    }
}


function mapDispatchToProps(dispatch) {
    return {
        loadMyMovieList: function (movie) {
            dispatch(loadMyMovieList(movie));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);