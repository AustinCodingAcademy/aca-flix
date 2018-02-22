import { connect } from 'react-redux';
import { loadSearch } from "../actions";
import SearchBox from '../components/SearchBox';

function mapDispatchToProps(dispatch){
    return {
        loadSearch: function(searchTerm){
            let action = loadSearch(searchTerm);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);
