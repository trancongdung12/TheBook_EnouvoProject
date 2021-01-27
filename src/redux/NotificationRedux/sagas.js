import { call, takeLatest, put } from 'redux-saga/effects';
import NotificationActions, { NotificationTypes } from './actions';
export function* userGetNotification() {
  //   try {
  //     const response = yield call(userLoginApi, data);
  //     const newResponse = {
  //       data: response.data.user,
  //       token: response.data.token.access_token,
  //     };
  //     yield put(LoginActions.userLoginSuccess(newResponse));
  //     homeScreen();
  //   } catch (error) {
  //     console.log(error);
  //     yield put(LoginActions.userLoginFailure(error));
  //   }
  console.log('success');
}
const userLoginSagas = () => [
  takeLatest(NotificationTypes.USER_GET_NOTIFICATION, userGetNotification),
];
export default userLoginSagas();
