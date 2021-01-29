import http from './http';

export async function userGetApiOrders() {
  return http.get('api/orders');
}

export async function userGetApiCart() {
  return http.get('api/basket/me');
}

export async function userAddBookToCartApi(data) {
  return http.post('api/basket', data);
}

export async function userOrderBooksApi(data) {
  return http.post('api/orders', data);
}
