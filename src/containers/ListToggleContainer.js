import ListToggle from "../components/ListToggle.js";
import { connect } from "react-redux";
import {saveMyMovie, removeMyMovie} from "../actions";

  
function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: () => {
      const action = saveMyMovie();
      dispatch(action);
    },
    removeMyMovie: () => {
      const action = removeMyMovie();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(ListToggle);
