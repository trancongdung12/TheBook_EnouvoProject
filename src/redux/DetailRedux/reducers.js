import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { DetailTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingBookDetail: false,
  responseBookDetail: null,
  typeBookDetail: '',
});

export const getBookDetail = (state, { response }) =>
  state.merge({ loadingBookDetail: true, typeBookDetail: 'User get detail book ' });
export const getBookDetailSuccess = (state, { response }) =>
  state.merge({
    loadingBookDetail: false,
    responseBookDetail: response,
    typeBookDetail: 'User  get detail book success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [DetailTypes.GET_BOOK_DETAIL]: getBookDetail,
  [DetailTypes.GET_BOOK_DETAIL_SUCCESS]: getBookDetailSuccess,
});

export default reducer;
