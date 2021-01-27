import { takeLatest, put, call } from 'redux-saga/effects';
import userActions, { UserTypes } from './actions';
import { getProfile, userChangePasswordApi, userEditProfileApi } from '../../api/users';
import http from '../../api/http';
export function* userInfoSaga() {
  try {
    console.log('run saga');
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVXNlciIsIm5hbWVpZCI6IjZWc1ljOENwIiwiZW1haWwiOiJ0aGFuaGRvYW5kZXZAZ21haWwuY29tIiwidW5pcXVlX25hbWUiOiJUaGFuaERvYW4iLCJuYmYiOjE2MTE3MjAxNDAsImV4cCI6MTYxMTgyODE0MCwiaWF0IjoxNjExNzIwMTQwfQ.Ury3HMpt0HkwNRoOjbItYUYQynt_pGBAaHK1dsPoVL8';

    http.setAuthorizationHeader(token);
    const response = yield call(getProfile);
    console.log('====================================');
    console.log(response);
    console.log('====================================');
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
