import * as APIUtil from '../util/talltale_api_util';

export const RECEIVE_TALLTALES = 'RECEIVE_TALLTALES';

export const RECEIVE_TALLTALE = 'RECEIVE_TALLTALE';

export const RECEIVE_NEW_TALLTALE = 'RECEIVE_NEW_TALLTALE';


export const receiveTalltales = (talltales) => ({
    type: RECEIVE_TALLTALES,
    talltales
});

export const receiveTalltale = (talltale) => ({
    type: RECEIVE_TALLTALE,
    talltale
});

export const receiveNewTalltale = (talltale) => ({
    type: RECEIVE_NEW_TALLTALE,
    talltale
});


export const fetchTalltales = () => dispatch => (
    APIUtil.fetchTalltales().then(talltales => (

        dispatch(receiveTalltales(talltales))
    )).catch(err => console.log(err))
);

export const fetchTalltale = id => dispatch => (
    APIUtil.fetchTalltale(id).then(talltale => (

        dispatch(receiveTalltale(talltale))
    )).catch(err => console.log(err))
);

export const createTalltale = talltale => dispatch => (
    APIUtil.createTalltale(talltale).then(talltale => (

        dispatch(receiveNewTalltale(talltale))
    ))
);