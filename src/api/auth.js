import http from './http';

export async function userRegisterApi(data) {
  return http.post('api/users', data);
}

export async function bookTypesApis() {
  return http.get('api/books');
}
