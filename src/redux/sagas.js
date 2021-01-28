import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
import authSaga from './AuthRedux/sagas';
import notification from './NotificationRedux/sagas';
import userSagas from './UserRedux/sagas';
import bookTypes from './HomeRedux/sagas';
import orderSagas from './OrderRedux/sagas';
import detailSagas from './DetailRedux/sagas';
import reviewSagas from './ReviewRedux/sagas';
export default function* root() {
  yield all([
    ...appSaga,
    ...authSaga,
    ...notification,
    ...userSagas,
    ...bookTypes,
    ...orderSagas,
    ...detailSagas,
    ...reviewSagas,
  ]);
}
