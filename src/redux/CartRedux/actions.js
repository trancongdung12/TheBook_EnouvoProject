import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const CartTypes = makeConstantCreator(
  'USER_ADD_CART',
  'USER_ADD_CART_SUCCESS',
  'USER_ADD_CART_FAILURE',
  'USER_END_MESSAGE',
  'USER_GET_CART',
  'USER_GET_CART_SUCCESS',
  'USER_GET_CART_FAILURE',
);

const userAddCart = (data) => makeActionCreator(CartTypes.USER_ADD_CART, { data });
const userAddCartSuccess = (response) =>
  makeActionCreator(CartTypes.USER_ADD_CART_SUCCESS, { response });
const userAddCartFailure = (error) => makeActionCreator(CartTypes.USER_ADD_CART_FAILURE, { error });
const userEndMessage = () => makeActionCreator(CartTypes.USER_END_MESSAGE);

const userGetCart = (onSuccess) => makeActionCreator(CartTypes.USER_GET_CART, { onSuccess });
const userGetCartSuccess = (response) =>
  makeActionCreator(CartTypes.USER_GET_CART_SUCCESS, { response });
const userGetCartFailure = (error) => makeActionCreator(CartTypes.USER_GET_CART_FAILURE, { error });

export default {
  userAddCart,
  userAddCartSuccess,
  userAddCartFailure,
  userEndMessage,
  userGetCart,
  userGetCartSuccess,
  userGetCartFailure,
};
