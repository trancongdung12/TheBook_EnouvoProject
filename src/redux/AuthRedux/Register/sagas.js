import { call, takeLatest, put } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import { userRegisterApi } from '../../../api/auth';
export function* userSignUpApi({ data }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data.Data,
      token: response.data.token.access_token,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error));
  }
}
const userSignUpSaga = () => [takeLatest(SignUpTypes.USER_SIGNUP, userSignUpApi)];
export default userSignUpSaga();
