/*
### CreateContainer.js
import connect from react-redux
mapStateToProps
mapDispatchToProps
connect and export
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
    onMount: value => {
      console.log("SearchBox mounted here ");
      dispatch(loadSearchTerm(value));  // comes from component
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
