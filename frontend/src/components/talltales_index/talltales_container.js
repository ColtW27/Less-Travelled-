import { connect } from 'react-redux';
import TalltalesIndex from './talltales_index';
import { fetchTalltales } from '../../actions/talltale_actions';

const mSTP = (state, ownProps) => ({
    talltales: Object.values(state.talltales)
})

const mDTP = dispatch => ({
    fetchTalltales: () => dispatch(fetchTalltales())
})

export default connect(mSTP, mDTP)(TalltalesIndex);