import { takeLatest } from 'redux-saga/effects';
import { AppTypes } from './actions';

export function* loadingAppSagas() {
  console.log('app');
}

const appSagas = () => [takeLatest(AppTypes.START_APP, loadingAppSagas)];
export default appSagas();
