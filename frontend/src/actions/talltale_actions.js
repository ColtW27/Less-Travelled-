import * as APIUtil from '../util/talltail_api_util';

export const RECEIVE_TALLTAILS = 'RECEIVE_TALLTAILS';

export const RECEIVE_TALLTAIL = 'RECEIVE_TALLTAIL';

export const RECEIVE_NEW_TALLTAIL = 'RECEIVE_NEW_TALLTAIL';


export const receiveTalltails = (talltails) => ({
    type: RECEIVE_TALLTAILS,
    talltails
});

export const receiveTalltail = (talltail) => ({
    type: RECEIVE_TALLTAIL,
    talltail
});

export const receiveNewTalltail = (talltail) => ({
    type: RECEIVE_NEW_TALLTAIL,
    talltail
});


export const fetchTalltales = () => dispatch => (
    APIUtil.fetchTalltales().then(talltails)
)