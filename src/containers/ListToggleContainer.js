import { connect } from 'react-redux';
import ListToggle from "../components/ListToggle.js";
import {saveMyMovie,removeMyMovie} from "../actions";


function mapDispatchToProps(dispatch){
  return {
    saveMyMovie:function(movies){
      dispatch(saveMyMovie(movies));
    },
    removeMyMovie:function(movies){
      dispatch(removeMyMovie(movies));
    }
  }
}

const ListToggleContainer = connect(null,mapDispatchToProps)(ListToggle);
export default ListToggleContainer
