import ListToggle from "../components/ListToggle";
import {connect} from 'react-redux';
import {saveMyMovie, removeMyMovie} from "../actions";

function mapStateToProps(state) {
  return {
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function() {
      dispatch(saveMyMovie());
    },
    removeMyMovie: function() {
      dispatch(removeMyMovie());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListToggle);

