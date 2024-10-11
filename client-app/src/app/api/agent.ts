import axios, { AxiosResponse } from "axios";
import { Product } from "../models/products";
import { ProductSale } from "../models/productSales";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/store";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.response.use((response) => {
  return sleep(1000)
    .then(() => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  currentUser: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("account/register", user),
  refreshToken: () => requests.post<User>("/account/refreshToken", {}),
};

const Products = {
  productList: () => requests.get<Product[]>('/products'),
  deleteProduct: (id: string) => requests.delete<void>(`/products/${id}`),
  addProduct: (product: Product) =>
    requests.post<Product>(`/products`, product),
  updateProduct: (id: string, product: Product) =>
    requests.put<void>(`/products/${id}`, product),
  syncProductSales: () => requests.post<void>('/products/sync-product-sales', {}),
};

const ProductSales = {
  salesList: () => requests.get<ProductSale[]>("/productsales"),
};

const agent = {
  Account,
  Products,
  ProductSales,
};

export default agent;
