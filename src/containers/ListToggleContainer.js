import {connect} from 'react-redux';
import {saveMyMovie, removeMyMovie} from '../actions';
import ListToggle from '../components/ListToggle';

function mapStateToProps(state) {
  return {
    movies: state.searchResults
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function(searchTerm) {
      let action = saveMyMovie(searchTerm);
      dispatch(action);
    },
    removeMyMovie: function(searchTerm) {
      let action = removeMyMovie(searchTerm);
      dispatch(action);
    }
  }
}

// using dispatch changes the data | connects to the compoment
const ListToggleContainer = connect(mapStateToProps, mapDispatchToProps)(ListToggle);
export default ListToggleContainer;
