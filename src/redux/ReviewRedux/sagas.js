import { call, takeLatest, put } from 'redux-saga/effects';
import ReviewActions, { ReviewTypes } from './actions';
import {
  addApiReviewBook,
  getApiAllReviewBook,
  removeApiReviewBook,
  getEditApiReviewBook,
  updateApiReviewBook,
} from '../../api/books';
export function* addReviewBookSaga({ data }) {
  try {
    yield call(addApiReviewBook, data);
  } catch (error) {
    console.log(error);
  }
}

export function* getAllReviewBookSaga() {
  try {
    const response = yield call(getApiAllReviewBook);
    yield put(ReviewActions.getAllReviewBookSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* removeReviewBookSaga({ data }) {
  try {
    const response = yield call(removeApiReviewBook, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* getEditReviewBookSaga({ data, onSuccess }) {
  try {
    const response = yield call(getEditApiReviewBook, data);
    yield put(ReviewActions.getEditReviewBookSuccess(response.data.data));
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
  }
}

export function* updateReviewBookSaga({ id, data }) {
  try {
    yield call(updateApiReviewBook, id, data);
  } catch (error) {
    console.log(error);
  }
}

const ReviewBookSagas = () => [
  takeLatest(ReviewTypes.ADD_REVIEW_BOOK, addReviewBookSaga),
  takeLatest(ReviewTypes.GET_ALL_REVIEW_BOOK, getAllReviewBookSaga),
  takeLatest(ReviewTypes.REMOVE_REVIEW_BOOK, removeReviewBookSaga),
  takeLatest(ReviewTypes.GET_EDIT_REVIEW_BOOK, getEditReviewBookSaga),
  takeLatest(ReviewTypes.UPDATE_REVIEW_BOOK, updateReviewBookSaga),
];
export default ReviewBookSagas();
