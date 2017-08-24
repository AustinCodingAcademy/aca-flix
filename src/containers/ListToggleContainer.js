import {connect} from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie,removeMyMovie} from "../actions/index";

function mapDispatchToProps(dispatch){
  return {
    saveMyMovie: function() {
      let action = saveMyMovie();
      dispatch(action);
    },
    removeMyMovie: function() {
      let action = removeMyMovie();
      dispatch(action);
  }
 }
}

export default connect(null, mapDispatchToProps)(ListToggle);
