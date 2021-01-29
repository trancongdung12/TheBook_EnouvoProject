import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const ReviewTypes = makeConstantCreator(
  'ADD_REVIEW_BOOK',
  'GET_ALL_REVIEW_BOOK',
  'GET_ALL_REVIEW_BOOK_SUCCESS',
  'REMOVE_REVIEW_BOOK',
  'GET_EDIT_REVIEW_BOOK',
  'GET_EDIT_REVIEW_BOOK_SUCCESS',
  'UPDATE_REVIEW_BOOK',
);

const addReviewBook = (data) => makeActionCreator(ReviewTypes.ADD_REVIEW_BOOK, { data });

const getALlReviewBook = () => makeActionCreator(ReviewTypes.GET_ALL_REVIEW_BOOK);

const removeReviewBook = (data) => makeActionCreator(ReviewTypes.REMOVE_REVIEW_BOOK, { data });

const updateReviewBook = (id, data) =>
  makeActionCreator(ReviewTypes.UPDATE_REVIEW_BOOK, { id, data });

const getEditReviewBook = (data, onSuccess) =>
  makeActionCreator(ReviewTypes.GET_EDIT_REVIEW_BOOK, { data, onSuccess });

const getEditReviewBookSuccess = (response) =>
  makeActionCreator(ReviewTypes.GET_EDIT_REVIEW_BOOK_SUCCESS, { response });

const getAllReviewBookSuccess = (response) =>
  makeActionCreator(ReviewTypes.GET_ALL_REVIEW_BOOK_SUCCESS, { response });
export default {
  addReviewBook,
  getALlReviewBook,
  getAllReviewBookSuccess,
  removeReviewBook,
  getEditReviewBook,
  getEditReviewBookSuccess,
  updateReviewBook,
};
