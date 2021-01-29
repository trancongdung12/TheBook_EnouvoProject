import { call, takeLatest, put } from 'redux-saga/effects';
import OrderAction, { OrderTypes } from './actions';
import { userGetApiOrders, userOrderBooksApi } from '../../api/orders';

export function* userGetOrders() {
  try {
    const response = yield call(userGetApiOrders);
    console.log('========Orders=======');
    console.log(response.data.orders);
    yield put(OrderAction.userGetOrdersSuccess(response.data.orders));
  } catch (error) {
    console.log(error);
  }
}

export function* userOrderBooks({ data }) {
  try {
    const response = yield call(userOrderBooksApi, data);
    console.log('========Orders Books=======');
    console.log(response);
    // yield put(OrderAction.userGetOrdersSuccess(response.data.orders));
  } catch (error) {
    console.log('========Orders Books Error=======');
    console.log(error);
  }
}
const userOrdersSaga = () => [
  takeLatest(OrderTypes.USER_GET_ORDER, userGetOrders),
  takeLatest(OrderTypes.USER_ORDER_BOOKS, userOrderBooks),
];
export default userOrdersSaga();
