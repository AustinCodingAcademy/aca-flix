import { connect } from "react-redux";
import NAME from "../components/NAME";
import {
  
} from "../actions";

function mapStateToProps(state) {
  return {
    PROP: state.NAME
  };
}
function mapDispatchToProps(dispatch) {
  return {
    PROP: (NAME) => {
      dispatch(ACTION(NAME));
    }
  };
}

const NAMEContainer = connect(mapStateToProps,mapDispatchToProps)(NAME);

export default NAMEContainer;
