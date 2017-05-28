/*
ListToggleContainer

import ListToggle
import action saveMyMovie and removeMyMovie
mapDisptachToProps for saveMyMovie and removeMyMovie
Change Item.js to use ListToggleContainer instead of ListToggle
*/

import {connect} from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie,
         removeMyMovie
} from "../actions";

function mapStateToProps(dispatch) {
  return {
    removeMyMovie: (id) => {
      dispatch(removeMyMovie(id));  // comes from component
    },
    saveMyMovie: (movie) => {
      dispatch(saveMyMovie(movie));
    }
  };
}


export default connect(mapStateToProps)(ListToggle);
