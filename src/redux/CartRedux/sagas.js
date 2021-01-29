import { call, takeLatest, put } from 'redux-saga/effects';
import AddCartActions, { CartTypes } from './actions';
import { userAddBookToCartApi, userGetApiCart } from '../../api/orders';
// import { detailScreen } from '../../navigation/pushScreen';
import { cartScreen } from '../../navigation/pushScreen';
export function* userAddBooksToCarts({ data }) {
  try {
    const response = yield call(userAddBookToCartApi, data);
    yield put(AddCartActions.userAddCartSuccess(response));
  } catch (error) {
    yield put(AddCartActions.userAddCartFailure(error));
  }
}

export function* userGetBooksToCarts({ onSuccess }) {
  try {
    const response = yield call(userGetApiCart);
    console.log(response);
    yield put(AddCartActions.userGetCartSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(AddCartActions.userGetCartFailure(error));
  }
}

const userAddToCartSagas = () => [
  takeLatest(CartTypes.USER_ADD_CART, userAddBooksToCarts),
  takeLatest(CartTypes.USER_GET_CART, userGetBooksToCarts),
];
export default userAddToCartSagas();
