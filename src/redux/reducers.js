import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import user from './UserRedux/reducers';
import bookTypes from './HomeRedux/reducer';
import auth from './AuthRedux/reducers';
import notification from './NotificationRedux/reducers';
import orders from './OrderRedux/reducers';
import detail from '../redux/DetailRedux/reducers';
import carts from '../redux/CartRedux/reducers';
import review from '../redux/ReviewRedux/reducers';
const rootReducer = combineReducers({
  app,
  auth,
  notification,
  user,
  bookTypes,
  orders,
  detail,
  carts,
  review,
});
export default rootReducer;
