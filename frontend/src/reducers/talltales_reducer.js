import { RECEIVE_TALLTALES,
         RECEIVE_TALLTALE,
         RECEIVE_NEW_TALLTALE
} from '../actions/talltale_actions';

const talltalesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign( {}, state)
    switch (action.type) {
        case RECEIVE_TALLTALES:
            action.talltales.data.forEach(talltale => { newState.all[talltale._id] = talltale
            })
            return newState.all

        case RECEIVE_TALLTALE:
            const newTalltale = { [action.talltale._id]: action.talltale };
            return Object.assign({}, state, newTalltale);

        case RECEIVE_NEW_TALLTALE:
            return newState.new = action.talltale.data
            
        default:
            return state;
    };
};

export default talltalesReducer;