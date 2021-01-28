import http from './http';

export async function getApiBookDetail(data) {
  return http.get('api/books/' + data);
}
export async function addApiReviewBook(data) {
  return http.post('api/reviews', data);
}
