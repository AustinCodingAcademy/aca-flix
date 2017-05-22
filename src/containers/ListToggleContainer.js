import {connect} from 'react-redux';
import ListToggle from '../components/ListToggle';
import {saveMyMovie} from '../actions';
import {removeMyMovie} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        saveMyMovie:function() {
            let action = saveMyMovie();
            dispatch(action);
        },
        removeMyMovie:function() {
            let action = removeMyMovie();
            dispatch(action);
        }
    }
}

const ListToggleContainer = connect(null, mapDispatchToProps)(ListToggle);
export default ListToggleContainer;