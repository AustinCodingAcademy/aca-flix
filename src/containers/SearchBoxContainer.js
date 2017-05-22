/*
### SearchBoxContainer.js
* import SearchBox
* import action `loadSearch`
* mapDispatchToProps for this action
* Determine which props to map to based on the props that are already coded into the SearchBox component
*/

import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import { loadSearchTerm,
         updateSearchTerm
} from "../actions";

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: value => {
      console.log("SearchBox mounted here ");
      dispatch(loadSearchTerm(value));
    }
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
