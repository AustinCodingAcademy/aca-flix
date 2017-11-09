import {connect} from 'react-redux';
import {loadSearch} from "../actions";
import SearchBox from "../components/SearchBox";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function(searchTerm) {
      let action = loadSearch(searchTerm);
      dispatch(action);
    }
  };
}

function mapStateToProps(state) {
  return {
    loadSearch: state.loadSearch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
