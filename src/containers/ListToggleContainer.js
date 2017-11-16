import { connect } from 'react-redux';
import {saveMyMovie} from "../actions";
import {removeMyMovie} from "../actions";
import ListToggle from "../components/ListToggle";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: function (id) {
      dispatch(removeMyMovie(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);
