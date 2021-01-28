import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { LoginTypes, SignUpTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  response: null,
  errorLogin: null,
  errorSignUp: null,
  token: null,
  type: '',
});

export const userLogin = (state, { response }) =>
  state.merge({ loading: true, errorLogin: null, type: 'User Login' });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    errorLogin: null,
    response: response.data,
    token: response.token,
    type: 'User login success',
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({
    loading: false,
    errorLogin: error,
    type: 'User login failure',
  });

export const userLogout = (state) =>
  state.merge({
    token: null,
    response: null,
  });

export const userSignUp = (state, { response }) =>
  state.merge({ loading: true, errorSignUp: null, type: 'Sign up' });

export const userSignUpSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    errorSignUp: null,
    token: response.token,
    response: response.data,
    type: 'Sign up success',
  });
export const userSignUpFailure = (state, { error }) =>
  state.merge({
    loading: false,
    errorSignUp: error,
    type: 'failure',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
  [SignUpTypes.USER_SIGNUP]: userSignUp,
  [SignUpTypes.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
  [SignUpTypes.USER_SIGNUP_FAILURE]: userSignUpFailure,
});

export default reducer;
