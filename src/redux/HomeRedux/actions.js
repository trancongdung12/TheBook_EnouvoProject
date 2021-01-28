import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';
export const BookTypes = makeConstantCreator(
  'BOOK_TYPES',
  'RESPONSE_SUCCESS',
  'RESPONSE_FAILURE',
  'GET_SUGGESTION',
  'GET_SUGGESTION_SUCCESS',
);

// function
const getBookTypes = () => makeActionCreator(BookTypes.BOOK_TYPES);
const responseSuccess = (response) => makeActionCreator(BookTypes.RESPONSE_SUCCESS, { response });
const responseFailure = (error) => makeActionCreator(BookTypes.RESPONSE_FAILURE, { error });
const getSuggestion = () => makeActionCreator(BookTypes.GET_SUGGESTION);
const getSuggestionSuccess = () => makeActionCreator(BookTypes.GET_SUGGESTION_SUCCESS);

export default {
  getBookTypes,
  responseSuccess,
  responseFailure,
  getSuggestion,
  getSuggestionSuccess,
};
