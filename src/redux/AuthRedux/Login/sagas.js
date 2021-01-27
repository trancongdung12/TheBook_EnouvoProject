import { call, takeLatest, put } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { userLoginApi } from '../../../api/auth';
import AsyncStorage from '@react-native-community/async-storage';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data.user,
      token: response.data.token.access_token,
    };
    yield AsyncStorage.setItem('token', response.data.token.access_token);
    yield put(LoginActions.userLoginSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
const userLoginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLogin)];
export default userLoginSagas();
