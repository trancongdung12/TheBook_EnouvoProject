import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import user from './UserRedux/reducers';
import signUp from './AuthRedux/Register/reducers';
const rootReducer = combineReducers({
  app,
  signUp,
  user,
});
export default rootReducer;
