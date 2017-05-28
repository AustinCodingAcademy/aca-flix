import ListToggle from "../components/ListToggle";
import { connect } from "react-redux";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    saveMyMovie: (movie) => {
      console.log(movie);
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: (movie) => {
      console.log(movie);
      dispatch(removeMyMovie(movie));
    }
  };
};

const ListToggleContainer = connect(
  null,
  mapDispatchToProps
)(ListToggle);

export default ListToggleContainer;
