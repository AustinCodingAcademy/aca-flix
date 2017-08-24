import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps)(SearchBox);
