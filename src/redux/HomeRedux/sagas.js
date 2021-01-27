import { call, takeLatest, put } from 'redux-saga/effects';
import BookTypeActions, { BookTypes } from './actions';
import { bookTypesApis } from '../../api/auth';
export function* bookTypesApi() {
  try {
    const response = yield call(bookTypesApis);
    const newResponse = {
      data: response.data.books,
    };
    console.log(newResponse);
    yield put(BookTypeActions.responseSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(BookTypeActions.responseFailure(error));
  }
}
const userBookTypesSaga = () => [takeLatest(BookTypes.BOOK_TYPES, bookTypesApi)];
export default userBookTypesSaga();
