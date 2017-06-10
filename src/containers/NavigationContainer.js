import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import {
  loadMyMovieList
} from "../actions";

function mapStateToProps(state) {
  return {
    value: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLoadNavigation: () => {
      dispatch(loadMyMovieList());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
