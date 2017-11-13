import { connect } from 'react-redux';
import SearchBox from "../components/SearchBox.js";
import {loadSearch} from "../actions";


function mapDispatchToProps(dispatch){
  return {
    setSearchText:function(txt){
      dispatch(loadSearch(txt));
    }
  }
}

const SearchBoxContainer = connect(null,mapDispatchToProps)(SearchBox);
export default SearchBoxContainer
