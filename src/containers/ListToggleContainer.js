import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        saveMyMovie:function(movie) {
        let action = saveMyMovie(movie);
        dispatch(action);
      },
      removeMyMovie:function(_id) {
        let action = removeMyMovie(_id);
        dispatch(action);
      }
    };
  }

//   function mapStateToProps(state) {
//     return {
//       contacts: state.searchTerm
//     };
//   }

  export default connect(null,mapDispatchToProps)(ListToggle);

