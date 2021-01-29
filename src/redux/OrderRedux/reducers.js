import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { OrderTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingOrders: false,
  responseOrders: null,
  typeOrders: '',
  ordersError: null,
});

export const userGetOrders = (state, { response }) =>
  state.merge({ loadingOrders: false, typeOrders: 'User get Orders' });

export const userGetOrdersSuccess = (state, { response }) =>
  state.merge({
    loadingOrders: false,
    responseOrders: response,
    typeOrders: 'User get orders success',
  });
export const userOrderBooks = (state, { response }) =>
  state.merge({ loadingOrders: true, ordersError: null, typeOrders: 'User order books' });
export const userOrderBookSuccess = (state, { response }) =>
  state.merge({
    loadingOrders: false,
    ordersError: null,
    responseOrders: response,
    typeOrders: 'user order books success',
  });
export const userOrderBooksFailure = (state, { error }) =>
  state.merge({
    loadingOrders: false,
    responseOrders: null,
    ordersError: error,
    typeOrders: 'user order books failure',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [OrderTypes.USER_GET_ORDER]: userGetOrders,
  [OrderTypes.USER_GET_ORDER_SUCCESS]: userGetOrdersSuccess,
  [OrderTypes.USER_ORDER_BOOKS]: userOrderBooks,
  [OrderTypes.USER_ORDER_BOOKS_SUCCESS]: userOrderBookSuccess,
  [OrderTypes.USER_ORDER_BOOKS_FAILURE]: userOrderBooksFailure,
});
export default reducer;
