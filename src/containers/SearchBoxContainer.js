import SearchBox from "../components/SearchBox";
import {connect} from "react-redux";
import {loadSearch} from "../actions";

// const mapStateToProps = state => {
//   return state;
// };

const mapDispatchToProps = dispatch => {
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
