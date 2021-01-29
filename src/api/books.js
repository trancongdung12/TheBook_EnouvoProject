import http from './http';

export async function getApiBookDetail(data) {
  return http.get('api/books/' + data);
}
export async function addApiReviewBook(data) {
  return http.post('api/reviews', data);
}
export async function removeApiReviewBook(data) {
  return http.delete('api/reviews/' + data);
}
export async function getEditApiReviewBook(data) {
  return http.get('api/reviews/' + data);
}
export async function updateApiReviewBook(id, data) {
  return http.put('api/reviews/' + id, data);
}
export async function getApiAllReviewBook() {
  return http.get('api/reviews');
}
export async function getSuggestionApi() {
  return http.get('api/search/suggestion');
}
