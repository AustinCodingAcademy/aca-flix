import {connect} from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions"

const mapDispatchToProps = (dispatch) => {
    return {
        loadSearch: (term) => {
            dispatch(loadSearch(term));
        }
    };
};

export default connect(null, mapDispatchToProps)(SearchBox);