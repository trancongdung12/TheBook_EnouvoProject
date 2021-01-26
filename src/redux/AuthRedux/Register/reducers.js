import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/Utils';
import { SignUpTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingSignUp: false,
  responseSignUp: null,
  signUpError: null,
  token: null,
  typeSignUp: '',
});

export const userSignUp = (state, { response }) =>
  state.merge({ loadingSignUp: true, signUpError: null, typeSignUp: 'Sign up' });

export const userSignUpSuccess = (state, { response }) =>
  state.merge({
    loadingSignUp: true,
    signUpError: null,
    token: response.token,
    responseSignUp: response.data,
    typeSignUp: 'Sign up success',
  });
export const userSignUpFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    signUpError: error,
    typeSignUp: 'failure',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [SignUpTypes.USER_SIGNUP]: userSignUp,
  [SignUpTypes.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
  [SignUpTypes.USER_SIGNUP_FAILURE]: userSignUpFailure,
});

export default reducer;
