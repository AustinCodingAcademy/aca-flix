import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyMovie} from "../actions";
import {removeMyMovie} from "../actions";


function mapDispatchToProps(dispatch) {

    return {
        saveMyMovie:function(movie){
            // has to match up with the  action
          var action = saveMyMovie(movie);
          
          dispatch(action);
        },
    removeMyMovie:function(movie){
        // has to match up with the  action
      var action = removeMyMovie(movie);
      
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);