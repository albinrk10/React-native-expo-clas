import { create } from 'axios';
import type { Product, ProductDto } from '../../domain/entities/Product';
import type { ProductsRepository } from '../../domain/repositories/ProductsRepository';

// TODO 2 - Coloca aquí tu endpoint actual de CrudCrud.
// Entra a https://crudcrud.com y copia tu URL.
const CRUDCRUD_BASE_URL = process.env.EXPO_PUBLIC_CRUDCRUD_BASE_URL ?? 'https://crudcrud.com/api/REEMPLAZA_TU_TOKEN';

const api = create({
  baseURL: CRUDCRUD_BASE_URL,
  timeout: 10000,
});

// TODO 3 - Logs globales de Axios.
// Esto permite ver cada golpe al endpoint en la consola.
api.interceptors.request.use((config) => {
  const method = config.method?.toUpperCase();
  console.log(`[API REQUEST] ${method} ${config.baseURL}${config.url}`);
  if (config.data) console.log('[API BODY]', config.data);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`[API RESPONSE] ${response.status} ${response.config.url}`);
    console.log('[API DATA]', response.data);
    return response;
  },
  (error) => {
    console.log('[API ERROR]', error.response?.status, error.message);
    return Promise.reject(error);
  },
);

function validarBaseUrl() {
  if (CRUDCRUD_BASE_URL.includes('REEMPLAZA_TU_TOKEN')) {
    throw new Error('Debes reemplazar CRUDCRUD_BASE_URL con tu endpoint actual de CrudCrud.');
  }
}

// TODO 4 - Equivalente a @GET("products") en Retrofit.
export async function getProducts(): Promise<Product[]> {
  //TODO:Equivale  GET : https://crudcrud.com/api/cf8881e5d60e4e36a7df9aed1a9b5bd6/products
  validarBaseUrl();
  const response = await api.get<Product[]>('/products');
  return response.data;
}

// TODO 5 - Equivalente a @POST("products") en Retrofit.
export async function insertProduct(product: ProductDto): Promise<Product> {
  
  `
  //TODO: Evivalente  POST: https://crudcrud.com/api/cf8881e5d60e4e36a7df9aed1a9b5bd6/products
  {
    "name":"Curso de Web 4",
    "price": 120
  }
  `
  validarBaseUrl();
  const response = await api.post<Product>('/products',product);
  return response.data;
}

export async function updateProduct(id: string, product: ProductDto): Promise<void> {
  `
   //TODO: Evivalente PUT :   https://crudcrud.com/api/cf8881e5d60e4e36a7df9aed1a9b5bd6/products/6af3b98f395ca403e8ec185b
  {
    "name":"Curso de Web 3",
    "price": 90
}
  `
validarBaseUrl();
await api.put(`/products/${id}`,product)
}

// TODO 7 - Equivalente a @DELETE("products/{id}") en Retrofit.
export async function deleteProduct(id: string): Promise<void> {
//TODO: DELETE : https://crudcrud.com/api/cf8881e5d60e4e36a7df9aed1a9b5bd6/products/6af3bae1395ca403e8ec185f
  validarBaseUrl();
  await api.delete(`/products/${id}`)
  
}

// Implementación de infraestructura del contrato definido en domain.
export const productsRepository: ProductsRepository = {
  getProducts,
  insertProduct,
  updateProduct,
  deleteProduct,
};
