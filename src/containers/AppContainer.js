import {connect} from 'react-redux'
import {loadMyMovieList} from '../actions'
import App from '../App'

const msp = (state) =>{
  return{
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
}

const mdp = (dispatch) =>{
  return{
    loadMyMovieList: ()=>dispatch(loadMyMovieList())
  }
}

export default connect(msp,mdp)(App)