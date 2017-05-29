import ListToggle from "../components/ListToggle";
import { connect } from "react-redux";
import {
  saveFavoriteMovie,
  removeFavoriteMovie,
  toggleFavoriteMovie,
} from "../actions";

function mapStateToProps(state) {
  return {
    movies: state.searchTerm.isMyMovie,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    saveMovie: (movie) => {
      console.log(movie, "saveMyMovie action dispatched");
      const myMovie = { ...movie, isMyMovie: true };
      dispatch(toggleFavoriteMovie(myMovie));
      dispatch(saveFavoriteMovie(myMovie));
    },
    removeMovie: (movie) => {
      console.log(movie);
      dispatch(removeFavoriteMovie(movie));
    }
  };
};

const ListToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListToggle);

export default ListToggleContainer;
