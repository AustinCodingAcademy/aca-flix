import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function(searchTerm) {
      var action = loadSearch(searchTerm);
      dispatch(action);
    },
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var SearchBoxContainer = otherFunction(SearchBox)

export default SearchBoxContainer;
