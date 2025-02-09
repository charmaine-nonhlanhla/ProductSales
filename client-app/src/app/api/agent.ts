import axios, {AxiosResponse } from 'axios';
import { Product } from '../models/products';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(response => {
    return sleep(1000).then(() => {
        return response;
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    })
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then( responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then( responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then( responseBody),
    delete: <T>  (url: string) => axios.delete<T>(url).then( responseBody),
};

const Products = {
    Productlist: () => requests.get<Product[]>('/products'),
}

const agent = {
    Products
}

export default agent;