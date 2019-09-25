import ListToggle from "../components/ListToggle";
import {saveMyMovie, removeMyMovie} from "../actions";
import {connect} from "react-redux";


// this.props.removeMyMovie(this.props.movie._id);

      // this.props.saveMyMovie(this.props.movie);

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie: function (id) {
      dispatch(removeMyMovie(id))
    }
  };
};

export default connect(null,mapDispatchToProps)(ListToggle);
