import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import {
  loadSearch
} from "../actions";

function mapStateToProps(state) {
  return {
    value: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLoadNavigation: () => {
      dispatch(loadSearch());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
