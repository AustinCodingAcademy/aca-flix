import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie, removeMyMovie} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: (myMovieList) => {
      dispatch(saveMyMovie(myMovieList));
    },
    removeMyMovie: (myMovieList) => {
      dispatch(removeMyMovie(myMovieList));
    },
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);
