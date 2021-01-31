import { takeLatest, put, call } from 'redux-saga/effects';
import userActions, { UserTypes } from './actions';
import { getProfile, userChangePasswordApi, userUpdateInfoApi } from '../../api/users';
// get info users
export function* userInfoSaga() {
  try {
    const response = yield call(getProfile);
    yield put(userActions.userInfoSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

// Change pass user
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
// update user
export function* userUpdateProfile({ data }) {
  try {
    const id = data.idUser;
    const dataUpdate = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      address: data.address,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      position: data.position,
      totalPoint: data.totalPoint,
    };
    const response = yield call(userUpdateInfoApi, id, dataUpdate);
    yield put(userActions.userUpdateProfileSuccess(response.data));
  } catch (error) {
    yield put(userActions.userUpdateProfileFailure(error));
  }
}
const userSagas = () => {
  return [
    takeLatest(UserTypes.USER_INFO, userInfoSaga),
    takeLatest(UserTypes.USER_CHANGE_PASSWORD, userChangePasswordSaga),
    takeLatest(UserTypes.USER_UPDATE_PROFILE, userUpdateProfile),
  ];
};

export default userSagas();
