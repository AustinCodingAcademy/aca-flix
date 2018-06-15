import ListToggle from "../components/ListToggle.js";
import { connect } from "react-redux";
import { saveMyMovie, removeMyMovie } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (id) {
      dispatch(saveMyMovie(id));
    },
    removeMyMovie: function (movie) {
      dispatch(removeMyMovie(movie));
    }
  };
}
  
export default connect(null,mapDispatchToProps)(ListToggle);

