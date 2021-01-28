import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const CartTypes = makeConstantCreator(
  'USER_ADD_CART',
  'USER_ADD_CART_SUCCESS',
  'USER_ADD_CART_FAILURE',
  'USER_END_MESSAGE',
);

const userAddCart = (data) => makeActionCreator(CartTypes.USER_ADD_CART, { data });
const userAddCartSuccess = (response) =>
  makeActionCreator(CartTypes.USER_ADD_CART_SUCCESS, { response });
const userAddCartFailure = (error) => makeActionCreator(CartTypes.USER_ADD_CART_FAILURE, { error });
const userEndMessage = () => makeActionCreator(CartTypes.USER_END_MESSAGE);

export default { userAddCart, userAddCartSuccess, userAddCartFailure, userEndMessage };
