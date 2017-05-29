import { connect } from "react-redux";
import TitleList from "../components/TitleList";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults.results,
    savedMovies: state.favoriteMovies,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(mapStateToProps)(TitleList);
