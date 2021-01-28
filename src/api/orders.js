import http from './http';

export async function userGetApiOrders() {
  return http.get('api/orders');
}
