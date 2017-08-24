import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {
  loadSearch
} from "../actions";

// function mapStateToProps(state) {
//  return {
//    PROP: state.NAME
//  };
// }

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    }
  };
}

const SearchBoxContainer = connect(null, mapDispatchToProps)(SearchBox);

export default SearchBoxContainer;
