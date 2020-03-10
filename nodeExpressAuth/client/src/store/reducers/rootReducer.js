import { combineReducers } from 'redux';

import authReducer from './authReducer';
import placesReducer from './placesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  places: placesReducer
});

export default rootReducer;
