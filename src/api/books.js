import http from './http';

export async function getApiBookDetail(data) {
  return http.get('api/books/' + data);
}
export async function getSuggestionApi() {
  return http.get('api/search/suggestion');
}
