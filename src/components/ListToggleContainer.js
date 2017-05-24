import {connect} from "react-redux";
import ListToggle from "./ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    
    saveMyMovie: (movie) => {
      dispatch(saveMyMovie(movie));
    },

       removeMyMovie: (id) => {
      dispatch(removeMyMovie(id));
    }
  };
}

const ListToggleContainer = connect(null,mapDispatchToProps)(ListToggle);

export default ListToggleContainer;