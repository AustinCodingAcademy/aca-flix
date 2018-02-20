import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMyMovieList} from "./actions";



function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadMyMovieList());
      }
  };
}

export default connect(null,mapDispatchToProps)(App);