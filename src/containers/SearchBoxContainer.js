import { connect } from "react-redux";
import {loadSearch} from "../actions";
import SearchBox from "../components/SearchBox";


function mapDispatchToProps(dispatch) {
  return {
    loadSearch(searchTerm) {
      const action = loadSearch(searchTerm);
      dispatch(action);
    }
  };
}
 
export default connect(null,mapDispatchToProps)(SearchBox);
