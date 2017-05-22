import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

function mapStateToProps(state) {
  return {
    toggle: state.toggled
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(saveMyMovie());
      dispatch(removeMyMovie());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListToggle);
