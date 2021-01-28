import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const ReviewTypes = makeConstantCreator('ADD_REVIEW_BOOK');

const addReviewBook = (data) => makeActionCreator(ReviewTypes.ADD_REVIEW_BOOK, { data });

export default addReviewBook;
