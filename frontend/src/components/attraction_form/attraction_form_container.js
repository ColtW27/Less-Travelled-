import { connect } from 'react-redux';
import { createAttraction } from '../../actions/attractions_actions';
import AttractionForm from './attraction_form';



const mSTP = state => ({
  currentUser: state.session.user,
  newAttraction: state.attractions.new
})

const mDTP = dispatch => ({
  createAttraction: attraction => dispatch(createAttraction(attraction))
})




export default connect(mSTP, mDTP)(AttractionForm)