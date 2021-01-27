import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import signUp from './AuthRedux/Register/reducers';
import bookTypes from './HomeRedux/reducer';
const rootReducer = combineReducers({
  app,
  signUp,
  bookTypes,
});
export default rootReducer;
