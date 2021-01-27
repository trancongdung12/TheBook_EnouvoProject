import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
import signUpSaga from './AuthRedux/Register/sagas';

import loginSaga from './AuthRedux/Login/sagas';
import notification from './NotificationRedux/sagas';
import userSagas from './UserRedux/sagas';
import bookTypes from './HomeRedux/sagas';
export default function* root() {
  yield all([...appSaga, ...signUpSaga, ...loginSaga, ...notification, ...userSagas, ...bookTypes]);
}
