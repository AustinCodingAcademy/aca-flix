import ListToggle from "./ListToggle";
import { connect } from "react-redux";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    saveMyMovie: (movie) => {
      const action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie: (movie) => {
      const action = removeMyMovie(movie);
      dispatch(action);
    }
  };
};

const ListToggleContainer = connect(
  null,
  mapDispatchToProps
)(ListToggle);

export default ListToggleContainer;
