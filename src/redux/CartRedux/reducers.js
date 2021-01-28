import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { CartTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingAddCart: false,
  responseAddCart: null,
  addCartError: null,
  typeAddCart: '',
  responseGetCart: null,
});

export const userAddToCart = (state, { response }) =>
  state.merge({ loadingAddCart: true, typeAddCart: 'User add to Cart', addCartError: null });
export const userAddToCartSuccess = (state, { response }) =>
  state.merge({
    loadingAddCart: false,
    responseAddCart: response,
    typeAddCart: 'User add to cart success',
    responseGetCart: null,
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

export const userGetToCart = (state, { response }) =>
  state.merge({ typeAddCart: 'User get to Cart' });
export const userGetToCartSuccess = (state, { response }) =>
  state.merge({
    responseGetCart: response.data,
    typeAddCart: 'User get to cart success',
  });
export const userGetToCartFailure = (state, { error }) =>
  state.merge({
    loadingAddCart: false,
    addCartError: error,
    typeAddCart: 'user get cart failure.',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [CartTypes.USER_ADD_CART]: userAddToCart,
  [CartTypes.USER_ADD_CART_SUCCESS]: userAddToCartSuccess,
  [CartTypes.USER_ADD_CART_FAILURE]: userAddToCartFailure,
  [CartTypes.USER_END_MESSAGE]: userEndMessage,
  [CartTypes.USER_GET_CART]: userGetToCart,
  [CartTypes.USER_GET_CART_SUCCESS]: userGetToCartSuccess,
  [CartTypes.USER_GET_CART_FAILURE]: userGetToCartFailure,
});

export default reducer;
