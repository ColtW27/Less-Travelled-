import { connect } from 'react-redux';
import TalltalesIndex from './talltales_index';
import { fetchTalltales, fetchTalltale } from '../../actions/talltale_actions';

const mSTP = (state, ownProps) => ({
    talltales: Object.values(state.talltales)
})

const mDTP = dispatch => ({
    fetchTalltales: () => dispatch(fetchTalltales()),
    fetchTalltale: () => dispatch(fetchTalltale())
})

export default connect(mSTP, mDTP)(TalltalesIndex);