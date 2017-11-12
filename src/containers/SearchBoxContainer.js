import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import { loadSearch } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function (searchTerm) {
      dispatch(loadSearch(searchTerm));
    }
  };
}

export default connect(null,mapDispatchToProps)(SearchBox);
