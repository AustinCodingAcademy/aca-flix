import App from "../App";
import {loadMyMovieList} from "../actions";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function (movies) {
      dispatch(loadMyMovieList(movies));
    }
  };
}

// App.propTypes = {
//   searchResults: PropTypes.string.isRequired,
//   myMovieList: PropTypes.number.isRequired
// };

export default connect(mapStateToProps,mapDispatchToProps)(App);
