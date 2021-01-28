import { call, takeLatest, put } from 'redux-saga/effects';
import DetailActions, { DetailTypes } from './actions';
import { getApiBookDetail } from '../../api/books';
import { detailScreen } from '../../navigation/pushScreen';
export function* getBookDetail({ data }) {
  try {
    const response = yield call(getApiBookDetail, data);
    yield put(DetailActions.getDetailBookSuccess(response.data));
    yield detailScreen();
  } catch (error) {
    console.log(error);
  }
}
const getBookDetailSagas = () => [takeLatest(DetailTypes.GET_BOOK_DETAIL, getBookDetail)];
export default getBookDetailSagas();
