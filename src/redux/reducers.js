import app from './AppRedux/reducers';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  app,
});
export default rootReducer;
