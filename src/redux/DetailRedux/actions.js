import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const DetailTypes = makeConstantCreator('GET_BOOK_DETAIL', 'GET_BOOK_DETAIL_SUCCESS');

const getDetailBook = (data) => makeActionCreator(DetailTypes.GET_BOOK_DETAIL, { data });
const getDetailBookSuccess = (response) =>
  makeActionCreator(DetailTypes.GET_BOOK_DETAIL_SUCCESS, { response });
export default { getDetailBook, getDetailBookSuccess };
