import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    removeMyMovie: (id) => {
      dispatch(removeMyMovie(id));
    },
    saveMyMovie: (movie) => {
      dispatch(saveMyMovie(movie));
    }
  };
}

const ListToggleContainer = connect(mapDispatchToProps)(ListToggle);

export default ListToggleContainer;
