import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions"

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (mov) {
      dispatch(saveMyMovie(mov));
    },
    removeMyMovie: function (id) {
      dispatch(removeMyMovie(id));
    }
  };
}

export default connect(null,mapDispatchToProps)(ListToggle);
