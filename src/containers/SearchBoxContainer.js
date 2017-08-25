import {connect} from 'react-redux';
import {loadSearch} from '../actions';
import SearchBox from '../components/SearchBox';



// function mapStateToProps(){
//   return {
//
//   }
// }

function mapDispatchToProps(dispatch){
  return {
    loadSearch: (searchTerm) => {
      dispatch(loadSearch(searchTerm))
    }
  }
}


export default connect(null,mapDispatchToProps)(SearchBox);
