import {connect} from 'react-redux';
import {loadMyMovieList} from '../actions';
import App from '../App';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function(searchTerm) {
      let action = loadMyMovieList();
      dispatch(action);
      }
    }
  }

  // using dispatch changes the data | connects to the compoment
  const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
  export default AppContainer
