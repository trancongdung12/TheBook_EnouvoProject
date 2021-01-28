import { call, takeLatest, put } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { userLoginApi } from '../../../api/auth';
import { userStartApp } from '../../AppRedux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import BookTypesActions from '../../HomeRedux/actions';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data.user,
      token: response.data.token.access_token,
    };
    yield AsyncStorage.setItem('token', response.data.token.access_token);
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(BookTypesActions.getBookTypes());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
export function* userLogout() {
  console.log('run ');
  yield AsyncStorage.clear();
  yield put(userStartApp());
}
const userLoginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
];
export default userLoginSagas();
