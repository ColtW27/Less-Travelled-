// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import attractions from './attractions_reducer';
import talltales from './talltales_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  ui, 
  attractions,
  talltales
});

export default RootReducer;