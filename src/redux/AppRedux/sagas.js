import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { introScreen, loginScreen } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-community/async-storage';
import BookTypesActions from '../HomeRedux/actions';
import OrderTypesAction from '../OrderRedux/actions';
import BookTypeActions from '../HomeRedux/actions';
export function* loadingAppSagas() {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.auth.token);
    }

    http.setAuthorizationHeader(token);
    if (token) {
      yield put(BookTypesActions.getBookTypes());
      yield put(OrderTypesAction.userGetOrders());
      yield put(BookTypeActions.getSuggestion());
    } else {
      loginScreen();
    }
  } catch (error) {
    loginScreen();
    console.log(error);
  }
}

export function* goToIntroSagas() {
  introScreen();
}

export function* makeSkipIntroSagas() {
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield loadingAppSagas();
}

const appSagas = () => [
  takeLatest(AppTypes.START_APP, loadingAppSagas),
  takeLatest(AppTypes.GO_TO_INTRO, goToIntroSagas),
  takeLatest(AppTypes.MAKE_SKIP_INTRO, makeSkipIntroSagas),
];
export default appSagas();
