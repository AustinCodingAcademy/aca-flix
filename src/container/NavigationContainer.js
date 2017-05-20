import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import {productLoadStart} from "../actions";



function mapStateToProps(state) {
  return {
    value: state
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onMountNavigation: () => {
      dispatch(productLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
