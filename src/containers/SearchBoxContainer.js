import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {loadSearch} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        loadSearch:function(searchTerm){
            let action = loadSearch(searchTerm);
            dispatch(action);
        }
    }
}

const SearchBoxContainer = connect(null, mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;