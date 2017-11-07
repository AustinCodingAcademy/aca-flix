import {connect} from 'react-redux';
import ListToggle from '../components/ListToggle';
import {saveMyMovie, removeMyMovie} from '../actions';



function mapDispatchToProps(dispatch){
    return {
        saveMyMovie: function(movie){
            let action = saveMyMovie(movie);
            dispatch(action);
        },
        removeMyMovie: function(id){
            let action = removeMyMovie(id);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ListToggle);








// ### ListToggleContainer
// * import ListToggle
// * import action `saveMyMovie` and `removeMyMovie`
// * mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
// * Change Item.js to use ListToggleContainer instead of ListToggle