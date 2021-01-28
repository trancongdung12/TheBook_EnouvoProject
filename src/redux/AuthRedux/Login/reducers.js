import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/Utils';
import { LoginTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  responseLogin: null,
  loginError: null,
  token: null,
  typeLogin: '',
});

export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, loginError: null, typeLogin: 'User Login' });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginError: null,
    responseLogin: response.data,
    token: response.token,
    typeLogin: 'User login success',
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({
    loadingLogin: false,
    loginError: error,
    typeLogin: 'User login failure',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
});

export default reducer;
