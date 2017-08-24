import ListToggle from "../components/ListToggle";
import {connect} from 'react-redux';
import {saveMyMovie, removeMyMovie} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function(x) {
      console.log('saved move:', x);
      dispatch(saveMyMovie(x));
    },
    removeMyMovie: function(x) {
      dispatch(removeMyMovie(x));
    }
  }
}

export default connect(null, mapDispatchToProps)(ListToggle);

