import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import {loadSearch} from "../actions";




function mapStateToProps(state) {
  return {
    value: state
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onMountSearchBox: () => {
      dispatch(loadSearch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
