import http from './http';

export async function userGetApiOrders() {
  return http.get('api/orders');
}

export async function userAddBookToCartApi(data) {
  return http.post('api/basket', data);
}
