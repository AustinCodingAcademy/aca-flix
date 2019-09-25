import { connect } from "react-redux"; 
import App from "../App";
import { loadMyMovieList } from "../actions/index";

const mapStateToProps = (state) => {
    return ({
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loadMyMovieList: () => {
            dispatch(loadMyMovieList());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
