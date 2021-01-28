import http from './http';

export async function getApiBookDetail(data) {
  return http.get('api/books/' + data);
}
