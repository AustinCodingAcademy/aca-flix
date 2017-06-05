import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {
  loadSearch
} from "../actions";

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
