import ListToggle from "./ListToggle";
import { connect } from "react-redux";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    saveMyMovie: (movie) => {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: (id) => {
      dispatch(removeMyMovie(id));
    }
  };
};

const ListToggleContainer = connect(
  null,
  mapDispatchToProps
)(ListToggle);

export default ListToggleContainer;
