import { takeLatest, put, call } from 'redux-saga/effects';
import userActions, { UserTypes } from './actions';
import { getProfile, userChangePasswordApi } from '../../api/users';
export function* userInfoSaga() {
  try {
    const response = yield call(getProfile);
    yield put(userActions.userInfoSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* userChangePasswordSaga({ data }) {
  try {
    const id = data.idUser;
    const dataChange = {
      currentPassword: data.currentPassword,
      password: data.password,
      confirmedPassword: data.confirmedPassword,
    };
    const response = yield call(userChangePasswordApi, id, dataChange);
    yield put(userActions.userChangePasswordSuccess(response));
  } catch (error) {
    yield put(userActions.userChangePasswordFailure(error));
  }
}
const userSagas = () => {
  return [
    takeLatest(UserTypes.USER_INFO, userInfoSaga),
    takeLatest(UserTypes.USER_CHANGE_PASSWORD, userChangePasswordSaga),
  ];
};

export default userSagas();
