import {connect} from 'react-redux';
import {loadSearchTerm, updateSearchTerm} from '../actions';
import TitleList from '../components/TitleList';

function mapStateToProps(state) {
  return {
    movies: state.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function(searchTerm) {
      let action = loadSearchTerm(searchTerm);
      dispatch(action);
    },
    updateSearch: function(searchTerm) {
      let action = updateSearchTerm(searchTerm);
      dispatch(action);
    }
  }
}

// using dispatch changes the data
const TitleListContainer = connect(mapStateToProps, mapDispatchToProps)(TitleList);
export default TitleListContainer;
