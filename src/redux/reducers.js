
import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import signUp from './AuthRedux/Register/reducers';
const rootReducer = combineReducers({
  app,
  signUp,
});
export default rootReducer;
