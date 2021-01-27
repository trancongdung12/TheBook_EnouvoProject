
import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import signUp from './AuthRedux/Register/reducers';
import login from './AuthRedux/Login/reducers';
const rootReducer = combineReducers({
  app,
  signUp,
  login,
});
export default rootReducer;
