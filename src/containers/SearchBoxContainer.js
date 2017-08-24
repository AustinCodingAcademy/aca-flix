import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function (searchTerm) {
      dispatch(loadSearch(searchTerm));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);

