import {connect} from 'react-redux';
import {saveMyMovie} from "../actions";
import {removeMyMovie} from "../actions";
import ListToggle from "../components/ListToggle";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function(movie) {
      let action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie: function(movie) {
      let action = removeMyMovie(movie);
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

export default connect(mapStateToProps, mapDispatchToProps)(ListToggle);
