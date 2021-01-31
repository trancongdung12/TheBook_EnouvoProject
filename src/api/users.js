import http from './http';

export async function getProfile() {
  return http.get('api/users/me');
}

export async function userChangePasswordApi(id, data) {
  return http.put('/api/users/' + id + '/password/change', data);
}
export async function userUpdateInfoApi(id, data) {
  return http.put('/api/users/' + id + '/updateprofile', data);
}
