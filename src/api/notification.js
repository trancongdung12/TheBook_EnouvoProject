import http from './http';

export async function userGetNotificationApi() {
  return http.get('api/usernotifications');
}
