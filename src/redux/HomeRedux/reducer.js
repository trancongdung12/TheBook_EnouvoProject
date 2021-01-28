import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { BookTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingData: false,
  responseDataType: null,
  error: null,
  responseSuggestion: null,
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
export const getSuggestion = (state) => state.merge({ responseSuggestion: null });
export const getSuggestionSuccess = (state, response) =>
  state.merge({ responseSuggestion: response });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [BookTypes.BOOK_TYPES]: bookType,
  [BookTypes.RESPONSE_SUCCESS]: responseTypesBookSuccess,
  [BookTypes.RESPONSE_FAILURE]: responseTypesBookFailure,
  [BookTypes.GET_SUGGESTION]: getSuggestion,
  [BookTypes.GET_SUGGESTION_SUCCESS]: getSuggestionSuccess,
});

export default reducer;
