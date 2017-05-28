import SearchBox from "../components/SearchBox";
import {connect} from "react-redux";
import {loadSearch} from "../actions";

// const mapStateToProps = state => {
//   return state;
// };

const mapDispatchToProps = dispatch => {
  return {
    onKeyUp: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    },
    onChange: (searchTerm) => {
      dispatch(loadSearch(searchTerm));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
