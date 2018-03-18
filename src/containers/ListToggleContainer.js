
import ListToggle from '../components/ListToggle';
import {saveMyMovie, removeMyMovie} from '../actions';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie(movie) {
      dispatch(saveMyMovie(movie))
    },
    removeMyMovie(movie) {
      dispatch(removeMyMovie(movie))
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);
