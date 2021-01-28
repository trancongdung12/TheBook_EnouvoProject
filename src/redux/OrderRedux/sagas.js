import { call, takeLatest, put } from 'redux-saga/effects';
import OrderAction, { OrderTypes } from './actions';
import { userGetApiOrders } from '../../api/orders';
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
const userOrdersSaga = () => [takeLatest(OrderTypes.USER_GET_ORDER, userGetOrders)];
export default userOrdersSaga();
