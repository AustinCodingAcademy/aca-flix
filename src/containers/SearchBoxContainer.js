import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import { LoadSearch } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function (searchTerm) {
      dispatch(LoadSearch(searchTerm));
    }
  };
}

export default connect(null,mapDispatchToProps)(SearchBox);
