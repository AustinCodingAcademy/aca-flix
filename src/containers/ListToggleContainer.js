import {connect} from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie,removeMyMovie} from "../actions/index";

function mapDispatchToProps(dispatch){
  return {
    save: () => dispatch(saveMyMovie()),
    remove: () => dispatch(removeMyMovie())
  }
}


export default connect(null, mapDispatchToProps)(ListToggle);
