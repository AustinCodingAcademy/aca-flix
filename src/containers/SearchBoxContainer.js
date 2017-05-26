import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {
  loadSearchTerm,
  updateSearchTerm,
} from "../actions";

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: term => {
      dispatch(loadSearchTerm(term));
    },
    handleChange: event => {
      dispatch(updateSearchTerm(event.target.value));
    },
    handleLoadSearch: term => {
      dispatch(loadSearchTerm(term));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
