import {connect} from "react-redux";
import ListToggle from "./ListToggle";
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

const ListToggleContainer = connect(
  null,
  mapDispatchToProps
)(ListToggle);

export default ListToggleContainer;