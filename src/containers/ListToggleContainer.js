import ListToggle from "../components/ListToggle.js";
import { connect } from "react-redux";
import {saveMyMovie, removeMyMovie} from "../actions";

  
function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: (id) => {
      const action = saveMyMovie(id);
      dispatch(action);
    },
    removeMyMovie: (movie) => {
      const action = removeMyMovie(movie);
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(ListToggle);
