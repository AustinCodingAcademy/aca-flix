import { connect } from "react-redux";
import { loadSearch } from "../actions";
import SearchBox from "./SearchBox";

const mapDispatchToProps = dispatch => {
  return {
    onKeyUp: (searchTerm) => {
      const action = loadSearch(searchTerm);
      dispatch(action);
    },
    onChange: (searchTerm) => {
      const action = loadSearch(searchTerm);
      dispatch(action);
    }
  };
};

const SearchBoxContainer = connect(
  null,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;
