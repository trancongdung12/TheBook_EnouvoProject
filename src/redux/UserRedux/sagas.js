import { takeLatest, put, call } from 'redux-saga/effects';
import userActions, { UserTypes } from './actions';
import { getProfile, userChangePasswordApi, userEditProfileApi } from '../../api/users';
export function* userInfoSaga() {
  try {
    const response = yield call(getProfile);
    yield put(userActions.userInfoSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

// export function* userChangePasswordSaga({ data }) {
//   try {
//     const response = yield call(userChangePasswordApi, data);
//     console.log('====================================');
//     console.log(response);
//     console.log('====================================');
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function* userEditProfileSaga({ data }) {
//   try {
//     const response = yield call(userEditProfileApi, data);
//     console.log('====================================');
//     console.log(response);
//     console.log('====================================');
//   } catch (error) {
//     console.log(error);
//   }
// }

const userSagas = () => {
  return [
    takeLatest(UserTypes.USER_INFO, userInfoSaga),
    // takeLatest(UserTypes.USER_CHANGE_PASSWORD, userChangePasswordSaga),
    // takeLatest(UserTypes.USER_EDIT, userEditProfileSaga),
  ];
};

export default userSagas();
