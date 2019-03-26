import {connect} from 'react-redux'
import ListToggle from '../components/ListToggle'
import {saveMyMovie, removeMyMovie} from '../actions'

const mdp = (dispatch)=>{
  return{
    saveMyMovie: (movie)=>dispatch(saveMyMovie(movie)),
    removeMyMovie: (movie)=>dispatch(removeMyMovie(movie))
  }
}

export default connect(null, mdp)(ListToggle)