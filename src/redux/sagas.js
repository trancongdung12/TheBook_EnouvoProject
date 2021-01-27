import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
import signUpSaga from './AuthRedux/Register/sagas';
import bookTypes from './HomeRedux/sagas';
export default function* root() {
  yield all([...appSaga, ...signUpSaga, ...bookTypes]);
}
