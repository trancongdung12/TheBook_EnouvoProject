import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { CartTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingAddCart: false,
  responseAddCart: null,
  addCartError: null,
  typeAddCart: '',
});

export const userAddToCart = (state, { response }) =>
  state.merge({ loadingAddCart: true, typeAddCart: 'User add to Cart', addCartError: null });
export const userAddToCartSuccess = (state, { response }) =>
  state.merge({
    loadingAddCart: false,
    responseAddCart: response,
    typeAddCart: 'User add to cart success',
  });
export const userAddToCartFailure = (state, { error }) =>
  state.merge({
    loadingAddCart: false,
    addCartError: error,
    typeAddCart: 'user add cart failure.',
  });
export const userEndMessage = (state, { response }) =>
  state.merge({
    loadingAddCart: false,
    addCartError: null,
    responseAddCart: null,
    typeAddCart: 'user add end Message failure.',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [CartTypes.USER_ADD_CART]: userAddToCart,
  [CartTypes.USER_ADD_CART_SUCCESS]: userAddToCartSuccess,
  [CartTypes.USER_ADD_CART_FAILURE]: userAddToCartFailure,
  [CartTypes.USER_END_MESSAGE]: userEndMessage,
});

export default reducer;
