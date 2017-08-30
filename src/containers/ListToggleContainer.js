import ListToggle from "../components/ListToggle";
import {saveMyMovie,removeMyMovie} from "../actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
  return{
    saveMyMovie: function(movie){
      let action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie: function(movie){
      let action = removeMyMovie(movie)
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(ListToggle)

let otherFunction = connect(null, mapDispatchToProps);
let ListToggleContainer = otherFunction(ListToggle)
export default ListToggleContainer;
