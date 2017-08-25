import {connect} from "react-redux";
import {saveMyMovie, removeMyMovie} from "../actions";
import ListToggle from "../components/ListToggle";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie(movie) {
      const action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie(id) {
      const action = removeMyMovie(id);
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);
