import { connect } from 'react-redux';
import {loadMyMovieList} from '../actions';
import App from "../App";


function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    load:function(movies){
      let action = loadMyMovieList(movies);
      dispatch(action);
    }
  }
}

function mapStateToProps(state){
  return {
    searchResults:state.searchResults,
    myMovieList:state.myMovieList
  }
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);


export default AppContainer