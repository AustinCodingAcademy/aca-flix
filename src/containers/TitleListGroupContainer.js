import { connect } from "react-redux";
import TitleListGroup from "../components/TitleListGroup";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    savedMovies: state.favoriteMovies,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(mapStateToProps)(TitleListGroup);
