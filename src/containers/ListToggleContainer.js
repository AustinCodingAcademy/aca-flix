import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    saveMyMovie: (movie) => dispatch(saveMyMovie(movie)),
    removeMyMovie: (id) => dispatch(removeMyMovie(id))
  };
};

export default connect(null, mapDispatchToProps)(ListToggle);
