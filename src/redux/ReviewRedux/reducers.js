import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { ReviewTypes } from './actions';

export const INITIAL_STATE = Immutable({
  reviewData: null,
  editData: null,
});

export const getAllReviewBookSuccess = (state, { response }) =>
  state.merge({
    reviewData: response,
    typeBookDetail: 'User get all review book',
  });
export const getEditReviewBookSuccess = (state, { response }) =>
  state.merge({
    editData: response,
    typeBookDetail: 'User edit review book',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ReviewTypes.GET_ALL_REVIEW_BOOK_SUCCESS]: getAllReviewBookSuccess,
  [ReviewTypes.GET_EDIT_REVIEW_BOOK_SUCCESS]: getEditReviewBookSuccess,
});

export default reducer;
