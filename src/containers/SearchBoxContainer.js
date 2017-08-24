import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    loadSearch: function() {
      let action = loadSearch();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
