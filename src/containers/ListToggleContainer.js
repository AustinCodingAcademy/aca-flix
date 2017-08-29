import { connect } from 'react-redux';
import ListToggle from "../components/ListToggle";
import {saveMyMovie, removeMyMovie} from "../actions";

function mapStateToProps(state){
  return {
    // users: state.users,
    // searchText: state.searchText
  }
}
function mapDispatchToProps(dispatch){
  return {
    saveMyMovie:function(movie){
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie:function(movie){
      dispatch(removeMyMovie(movie));
    }
  }
}

const ListToggleContainer = connect(mapStateToProps,mapDispatchToProps)(ListToggle);
export default ListToggleContainer