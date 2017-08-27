import {connect} from 'react-redux';
import {saveMyMovie, removeMyMovie} from '../actions/';
import ListToggle from '../components/ListToggle';

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: (movie) => {dispatch(saveMyMovie(movie))},
    removeMyMovie: (id) => {dispatch(removeMyMovie(id))}
  }
}

export default connect(null, mapDispatchToProps)(ListToggle);
