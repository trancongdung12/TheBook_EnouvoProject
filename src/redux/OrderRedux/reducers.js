import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { OrderTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingOrders: false,
  responseOrders: null,
  typeOrders: '',
});

export const userGetOrders = (state, { response }) =>
  state.merge({ loadingOrders: true, typeOrders: 'User get Orders' });

export const userGetOrdersSuccess = (state, { response }) =>
  state.merge({
    loadingOrders: false,
    responseOrders: response,
    typeOrders: 'User get orders success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [OrderTypes.USER_GET_ORDER]: userGetOrders,
  [OrderTypes.USER_GET_ORDER_SUCCESS]: userGetOrdersSuccess,
});
export default reducer;
