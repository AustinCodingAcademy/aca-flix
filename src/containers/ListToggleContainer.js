import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";

function mapDisptachToProps(dispatch) {
  return {
    removeMyMovie(movie) {
      dispatch(removeMyMovie(movie));
    },
    saveMyMovie(movie) {
      dispatch(saveMyMovie(movie));
    }
  };
}

export default connect(null, mapDisptachToProps)(ListToggle);
