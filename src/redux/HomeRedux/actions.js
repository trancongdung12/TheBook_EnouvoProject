import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';
export const BookTypes = makeConstantCreator('BOOK_TYPES', 'RESPONSE_SUCCESS', 'RESPONSE_FAILURE');

// function
const getBookTypes = () => makeActionCreator(BookTypes.BOOK_TYPES);
const responseSuccess = (response) => makeActionCreator(BookTypes.RESPONSE_SUCCESS, { response });
const responseFailure = (error) => makeActionCreator(BookTypes.RESPONSE_FAILURE, { error });
export default {
  getBookTypes,
  responseSuccess,
  responseFailure,
};
