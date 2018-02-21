import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";
import {connect} from "react-redux";

//searchBox component useses loadSearch(props, function) and searchTerm(state)

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function (searchTerm) {
      dispatch(loadSearch(searchTerm));
    }
  };
};

export default connect(null,mapStateToProps)(SearchBox);
