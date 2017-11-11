import { connect } from 'react-redux';
import ListToggle from "../components/ListToggle.js";
import {saveMyMovie, removeMyMovie} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function(movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: function(id) {
      dispatch(removeMyMovie(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);
