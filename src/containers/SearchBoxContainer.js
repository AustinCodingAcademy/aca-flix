import SearchBox from "../components/SearchBox";
import { loadSearch } from "../actions/index.js";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return ({
        loadSearch: (searchTerm) => {
            dispatch(loadSearch(searchTerm));
        }
    });
};

export default connect(null, mapDispatchToProps)(SearchBox);
