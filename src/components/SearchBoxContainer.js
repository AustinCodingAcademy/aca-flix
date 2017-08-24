import { connect } from "react-redux";
import { loadSearch } from "../actions";
import SearchBox from "./SearchBox";

const mapDispatchToProps = dispatch => {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    },
  };
};

const SearchBoxContainer = connect(
  null,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;
