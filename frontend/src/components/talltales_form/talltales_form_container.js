import { connect } from 'react-redux';
import { createTalltale } from '../../util/talltale_api_util';
import Talltalesform from './talltales_form';


const mSTP = state => ({
    currentUser: state.session.user,
    talltales: {
    title: '',
    author_id: '',
    body: ''
    }
});

const mDTP = dispatch => ({
    createTalltale: talltale => dispatch(createTalltale(talltale))
});

export default connect(mSTP, mDTP)(Talltalesform);