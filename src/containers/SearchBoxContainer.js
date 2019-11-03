import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        loadSearch: function(searchTerm) {
            dispatch(loadSearch(searchTerm));
            console.log(searchTerm); //SEARCH TERM -IS- LOGGING TO CONSOLE
        }
    };
}

export default connect(null, mapDispatchToProps)(SearchBox);