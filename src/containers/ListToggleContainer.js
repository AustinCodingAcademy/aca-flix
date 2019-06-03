import { connect } from "react-redux"
import ListToggle from "../components/ListToggle"
import { saveMyMovie, removeMyMovie} from "../actions"

const mapDispatchToProps = (dispatch) => {
    saveMyMovie: (movies) => dispatch(saveMyMovie(movies))
    removieMyMovie: (id) => dispatch(removeMyMovie(id))
}

export default connect(null, mapDispatchToProps)(ListToggle)


