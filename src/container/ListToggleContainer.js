import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie,
removeMyMovie
} from "../actions";

function mapStateToProps(state) {
  return {
    value: state
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onMountListToggle: () => {
      dispatch(saveMyMovie(), removeMyMovie());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListToggle);
