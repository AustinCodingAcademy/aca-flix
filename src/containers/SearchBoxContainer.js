import { connect } from 'react-redux';
import SearchBox from "../components/SearchBox";
import { loadSearch } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        loadSearch: function (term) {
            dispatch(loadSearch(term));
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);