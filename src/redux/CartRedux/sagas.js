import { call, takeLatest, put } from 'redux-saga/effects';
import AddCartActions, { CartTypes } from './actions';
import { userAddBookToCartApi } from '../../api/orders';
// import { detailScreen } from '../../navigation/pushScreen';
export function* userAddBooksToCarts({ data }) {
  try {
    const response = yield call(userAddBookToCartApi, data);
    yield put(AddCartActions.userAddCartSuccess(response));
  } catch (error) {
    yield put(AddCartActions.userAddCartFailure(error));
  }
}
const userAddToCartSagas = () => [takeLatest(CartTypes.USER_ADD_CART, userAddBooksToCarts)];
export default userAddToCartSagas();
