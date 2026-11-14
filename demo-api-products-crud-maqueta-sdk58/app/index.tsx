import { productsRepository } from '../src/data/repositories/axiosProductsRepository';
import { ProductsScreen } from '../src/presentation/screens/ProductsScreen';

// Punto de composición: data implementa el contrato que recibe presentation.
export default function InicioRoute() {
  return <ProductsScreen repository={productsRepository} />;
}
