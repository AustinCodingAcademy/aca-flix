import {connect} from "react-redux";
import ListToggle from "./ListToggle";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: function (id) {
      dispatch(removeMyMovie(id));
    }
  };
}

export default connect(
  mapDispatchToProps
)(ListToggle);
