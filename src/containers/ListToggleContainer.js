import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie } from "../actions";
import { removeMyMovie } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie(movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie(movie) {
      dispatch(removeMyMovie(movie));
    },
  };
}

export default connect(null,mapDispatchToProps)(ListToggle);
