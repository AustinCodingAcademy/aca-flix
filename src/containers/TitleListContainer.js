import { connect } from "react-redux";
import TitleList from "../components/TitleList";

function mapStateToProps(state) {
  return {
    movies: state.searchResults.results,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(mapStateToProps)(TitleList);
