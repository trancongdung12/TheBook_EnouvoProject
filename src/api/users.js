import http from './http';

export async function getProfile() {
  return http.get('api/users/me');
}

// export async function userChangePassword(data) {
//   return http.put('/users/me/changePassword', data);
// }
// export async function userUpdateInfo(data) {
//   return http.put('/users/me', data);
// }
