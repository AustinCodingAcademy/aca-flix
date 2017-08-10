import { connect } from "react-redux";
import TitleListGroup from "../components/TitleListGroup";

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    savedMovies: state.favoriteMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchResults: dispatch.searchResults,
    savedMovies: dispatch.favoriteMovies,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleListGroup);
