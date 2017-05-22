import {connect} from 'react-redux';
import {loadSearchTerm, updateSearchTerm} from '../actions';
import SearchBox from '../components/SearchBox';

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
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
const SearchBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;
