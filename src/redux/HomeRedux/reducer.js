import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { BookTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseDataType: null,
  error: null,
});

export const bookType = (state) => state.merge({ loadingData: true, signUpError: null });

export const responseTypesBookSuccess = (state, { response }) =>
  state.merge({
    loadingData: false,
    error: null,
    responseDataType: response,
  });
export const responseTypesBookFailure = (state, { error }) =>
  state.merge({
    loadingSignUp: false,
    error: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [BookTypes.BOOK_TYPES]: bookType,
  [BookTypes.RESPONSE_SUCCESS]: responseTypesBookSuccess,
  [BookTypes.RESPONSE_FAILURE]: responseTypesBookFailure,
});

export default reducer;
