import type { Product, ProductDto } from '../entities/Product';

export interface ProductsRepository {
  getProducts(): Promise<Product[]>;
  insertProduct(product: ProductDto): Promise<Product>;
  updateProduct(id: string, product: ProductDto): Promise<void>;
  deleteProduct(id: string): Promise<void>;
}
