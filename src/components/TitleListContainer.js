import { connect } from "react-redux";
import TitleList from "./TitleList";

function mapStateToProps(state) {
  return {
    movies: state.searchResults.results,
    savedMovies: state.myMovieList
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(mapStateToProps)(TitleList);
