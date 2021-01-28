import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { loginScreen, introScreen } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-community/async-storage';
import BookTypesActions from '../HomeRedux/actions';
import OrderTypesAction from '../OrderRedux/actions';
export function* loadingAppSagas() {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.login.token);
    }

    http.setAuthorizationHeader(token);
    if (token) {
      introScreen();
      yield put(BookTypesActions.getBookTypes());
      yield put(OrderTypesAction.userGetOrders());
    } else {
      loginScreen();
    }
  } catch (error) {
    loginScreen();
    console.log(error);
  }
}

const appSagas = () => [takeLatest(AppTypes.START_APP, loadingAppSagas)];
export default appSagas();
