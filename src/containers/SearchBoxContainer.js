import {connect} from 'react-redux'
import SearchBox from '../components/SearchBox'
import {loadSearch} from '../actions'

const mdp = (dispatch) =>{
  return{
    loadSearch: (movie)=>dispatch(loadSearch(movie))
  }
}

export default connect(null, mdp)(SearchBox)