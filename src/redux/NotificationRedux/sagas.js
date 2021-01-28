import { call, takeLatest, put } from 'redux-saga/effects';
import NotificationActions, { NotificationTypes } from './actions';
import { userGetNotificationApi } from '../../api/notification';
export function* userGetNotification() {
  try {
    const response = yield call(userGetNotificationApi);
    console.log(response);
    yield put(NotificationActions.userGetNotificationSuccess(response));
  } catch (error) {
    console.log(error);
  }
}
const userNotificationSagas = () => [
  takeLatest(NotificationTypes.USER_GET_NOTIFICATION, userGetNotification),
];
export default userNotificationSagas();
