import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import {loadSearch} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        loadSearch:function(){
            let action = loadSearch();
            dispatch(action);
        },
        searchTerm:function(text) {
            let action = searchTerm(text);
            dispatch(action);
        }
    }
}

const SearchBoxContainer = connect(null, mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;