import { connect } from 'react-redux';
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";

// function mapStateToProps(state){
//   return {
//     // IS THIS FUNCTION NEEDED? What data would go here
//     // users: state.users,
//     // searchText: state.searchText
//   }
// }
function mapDispatchToProps(dispatch){
  return {
    loadSearch:function(user){
      dispatch(loadSearch(user));
    }
  }
}

const SearchBarContainer = connect(null,mapDispatchToProps)(SearchBox);
export default SearchBarContainer