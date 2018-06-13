import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import { loadSearch } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        loadSearch:function(searchTerm) {
        let action = loadSearch(searchTerm);
        dispatch(action);
      }
    };
  }

//   function mapStateToProps(state) {
//     return {
//       contacts: state.searchTerm
//     };
//   }

  export default connect(null,mapDispatchToProps)(SearchBox);

