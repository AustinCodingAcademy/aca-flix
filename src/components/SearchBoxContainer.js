import { connect } from "react-redux";
import { loadSearch } from "../actions";
import SearchBox from "./SearchBox";

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    }
  };
}

const SearchBoxContainer = connect(
  null,
  mapDispatchToProps
  )(SearchBox);

export default SearchBoxContainer;
