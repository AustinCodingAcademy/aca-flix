import { connect } from 'react-redux';
import ListToggle from "../components/ListToggle";
import {saveMyMovie} from '../actions';
import {removeMyMovie} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    saveMyMovie:function(movie){
      let action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie:function(id){
      let action = removeMyMovie(id);
      dispatch(action);
    }
  }
}

const ListToggleContainer = connect(null,mapDispatchToProps)(ListToggle);


export default ListToggleContainer