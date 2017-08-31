import {loadSearch} from "../actions";
import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";

function mapDispatchToProps(dispatch) {
  return{
    loadSearch: function(movies){
      let action = loadSearch(movies);
      dispatch(action);
    }
  };
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(Search)

let otherFunction = connect(null, mapDispatchToProps);
let SearchBoxContainer = otherFunction(SearchBox)
export default SearchBoxContainer;
