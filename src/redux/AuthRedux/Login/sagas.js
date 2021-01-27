import { call, takeLatest, put } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { userLoginApi } from '../../../api/auth';
import { homeScreen } from '../../../navigation/pushScreen';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data.user,
      token: response.data.token.access_token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    homeScreen();
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
const userLoginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLogin)];
export default userLoginSagas();
