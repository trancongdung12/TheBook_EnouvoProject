import { call, takeLatest, put } from 'redux-saga/effects';
import BookTypeActions, { BookTypes } from './actions';
import { bookTypesApis } from '../../api/auth';
import { getSuggestionApi } from '../../api/books';
import { homeScreen } from '../../navigation/pushScreen';
import ReviewActions from '../ReviewRedux/actions';
import userActions from '../UserRedux/actions';
export function* bookTypesApi() {
  try {
    const response = yield call(bookTypesApis);
    const newResponse = {
      data: response.data.books,
    };
    yield put(BookTypeActions.responseSuccess(newResponse));
    yield put(ReviewActions.getALlReviewBook());
    yield put(userActions.userInfo());
    homeScreen();
  } catch (error) {
    console.log(error);
    yield put(BookTypeActions.responseFailure(error));
  }
}
export function* getSearchSuggestion() {
  try {
    const response = yield call(getSuggestionApi);
    console.log('+++++++++++++GET SUGGESTION++++++++++++++++++++++++');
    yield put(BookTypeActions.getSuggestionSuccess(response.data.data));
  } catch (error) {
    console.log(error);
  }
}
const userBookTypesSaga = () => [
  takeLatest(BookTypes.BOOK_TYPES, bookTypesApi),
  takeLatest(BookTypes.GET_SUGGESTION, getSearchSuggestion),
];
export default userBookTypesSaga();
