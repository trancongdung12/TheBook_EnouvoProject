import { call, takeLatest, put } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import LoginActions, { LoginTypes } from './actions';
import { userLoginApi, userRegisterApi } from '../../api/auth';
import { userStartApp } from '../AppRedux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import NotificationActions from '../NotificationRedux/actions';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data.user,
      token: response.data.token.access_token,
    };
    yield AsyncStorage.setItem('token', response.data.token.access_token);
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(NotificationActions.userGetNotification());
    yield put(userStartApp());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}

export function* userLogout() {
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield put(userStartApp());
}

export function* userSignUpApi({ data }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data.data.user,
      token: response.data.data.token.access_token,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    yield put(userStartApp());
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error));
  }
}
const userLoginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
  takeLatest(SignUpTypes.USER_SIGNUP, userSignUpApi),
];
export default userLoginSagas();
