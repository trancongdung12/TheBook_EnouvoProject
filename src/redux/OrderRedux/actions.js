import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const OrderTypes = makeConstantCreator(
  'USER_GET_ORDER',
  'USER_GET_ORDER_SUCCESS',
  'USER_ORDER_BOOKS',
  'USER_ORDER_BOOKS_SUCCESS',
  'USER_ORDER_BOOKS_FAILURE',
);

const userGetOrders = () => makeActionCreator(OrderTypes.USER_GET_ORDER);
const userGetOrdersSuccess = (response) =>
  makeActionCreator(OrderTypes.USER_GET_ORDER_SUCCESS, { response });

const userOrderBooks = (data) => makeActionCreator(OrderTypes.USER_ORDER_BOOKS, { data });
const userOrderBooksSuccess = (response) =>
  makeActionCreator(OrderTypes.USER_ORDER_BOOKS_SUCCESS, { response });
const userOrderBooksFailure = () => makeActionCreator(OrderTypes.USER_GET_ORDER_FAILURE, { error });
export default {
  userGetOrders,
  userGetOrdersSuccess,
  userOrderBooks,
  userOrderBooksSuccess,
  userOrderBooksFailure,
};
