import { connect } from "react-redux";
import ListToggle from "../components/ListToggle.js";
import {saveMyMovie} from "../actions/index";
import {removeMyMovie} from "../actions/index";


// New Toggle Container that I will import to APP
function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function(movie) {
      const action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie: function(id) {
      const action = removeMyMovie(id);
      dispatch(action);
    }
  };

}

export default connect(null,mapDispatchToProps)(ListToggle);
