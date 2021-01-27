import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import user from './UserRedux/reducers';
import signUp from './AuthRedux/Register/reducers';
import login from './AuthRedux/Login/reducers';
import notification from './NotificationRedux/reducers';
const rootReducer = combineReducers({
  app,
  signUp,
  login,
  notification,
  user,
});
export default rootReducer;
