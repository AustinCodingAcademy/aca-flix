import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {
  loadSearchTerm
} from "../actions";

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadSearchTerm());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
