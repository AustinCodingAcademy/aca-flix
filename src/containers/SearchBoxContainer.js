/*
### SearchBoxContainer.js
* import SearchBox
* import action `loadSearch`
* mapDispatchToProps for this action
* Determine which props to map to based on the props that are already coded into the SearchBox component
*/

import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import { loadSearch,
         updateSearchTerm
} from "../actions";

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm  // comes from component
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: term => {
      dispatch(loadSearch(term));
    },
    handleChange: event => {
      dispatch(updateSearchTerm(event.target.value));
    },
    handleLoadSearch: term => {
      dispatch(loadSearch(term));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
