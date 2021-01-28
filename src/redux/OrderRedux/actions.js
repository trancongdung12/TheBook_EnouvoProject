import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const OrderTypes = makeConstantCreator('USER_GET_ORDER', 'USER_GET_ORDER_SUCCESS');

const userGetOrders = () => makeActionCreator(OrderTypes.USER_GET_ORDER);
const userGetOrdersSuccess = (response) =>
  makeActionCreator(OrderTypes.USER_GET_ORDER_SUCCESS, { response });
export default {
  userGetOrders,
  userGetOrdersSuccess,
};
