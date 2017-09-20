import { connect } from 'react-redux';
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";


function mapDispatchToProps(dispatch){
    return {
      searchTerm:function(mov){
        dispatch(loadSearch(mov));
      }
    }
  }

export default connect(null,mapDispatchToProps)(SearchBox);