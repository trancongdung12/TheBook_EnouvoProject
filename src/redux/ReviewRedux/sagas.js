import { call, takeLatest, put } from 'redux-saga/effects';
import { ReviewTypes } from './actions';
import { addApiReviewBook } from '../../api/books';
export function* addReviewBook({ data }) {
  try {
    yield call(addApiReviewBook, data);
  } catch (error) {
    console.log(error);
  }
}
const addReviewBookSagas = () => [takeLatest(ReviewTypes.ADD_REVIEW_BOOK, addReviewBook)];
export default addReviewBookSagas();
