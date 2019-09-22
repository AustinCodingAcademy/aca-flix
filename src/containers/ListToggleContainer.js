import { connect } from 'react-redux';
import { saveMyMovie, removeMyMovie } from "../actions";
import ListToggle from '../components/ListToggle';

function mapDispatchToProps(dispatch) {
    return {
        saveMyMovie: function(movie) {
            let action = saveMyMovie(movie);
            dispatch(action);
        },
        removeMyMovie: function(id) {
            let action = removeMyMovie(id);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ListToggle);

