import ListToggle from '../components/ListToggle';
import {saveMyMovie, removeMyMovie} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie() {
      dispatch(saveMyMovie())
    },
    removeMyMovie() {
      dispatch(removeMyMovie())
    }
  }
}

export default connect(null, mapDispatchToProps)(ListToggle);
