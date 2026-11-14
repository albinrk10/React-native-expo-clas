import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import type { Product, ProductDto } from '../../domain/entities/Product';
import type { ProductsRepository } from '../../domain/repositories/ProductsRepository';

// TODO 8 - Hook equivalente al HomeViewModel del tutorial Android.
export function useProductsApi(repository: ProductsRepository) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('[SCREEN] Ejecutando GET /products');

      // TODO 9 - Llamar getProducts y guardar en estado.
      const data = await repository.getProducts();
      setProducts(data);
    } catch {
      setError('No se pudieron cargar productos. Revisa el endpoint de CrudCrud.');
    } finally {
      setLoading(false);
    }
  }, [repository]);

  const clearForm = () => {
    setProductName('');
    setProductPrice('');
    setProductId(null);
  };

  const saveProduct = async () => {
    const price = Number(productPrice);
    if (!productName.trim() || Number.isNaN(price)) {
      Alert.alert('Datos inválidos', 'Ingresa nombre y precio válido.');
      return;
    }

    const dto: ProductDto = { name: productName.trim(), price };

   
   try {
     // TODO 10 - Si productId es null: POST. Si tiene valor: PUT.
      if (productId === null) {
      console.log('[SCREEN] Ejecutando POST /products');
      await repository.insertProduct(dto);
    } else {
      console.log(`[SCREEN] Ejecutando PUT /products/${productId}`);
      await repository.updateProduct(productId, dto);
    }

    clearForm();
    await loadProducts();
   } catch (e) {
    console.log('[Screen Error] Guardar producto', e);
    Alert.alert('Error', 'No se pudo guardar el producto.');
   }
  };

  const editProduct = (product: Product) => {
    setProductName(product.name);
    setProductPrice(product.price.toString());
    setProductId(product._id);
  };

  const removeProduct = async (product: Product) => {
    try{
   // TODO 11 - Llamar DELETE y luego recargar con GET.
    console.log(`[SCREEN] Ejecutando DELETE /products/${product._id}`);
    await repository.deleteProduct(product._id);
    await loadProducts();
    }catch(e){
      console.log('[SCREEN Error] Eliminar producto', e);
      Alert.alert('Error','No se pudo eliminar el producto.')
    }
  
    
  };

  useEffect(() => {
    // TODO 12 - Cargar productos al iniciar.
    void Promise.resolve().then(loadProducts);
  }, [loadProducts]);

  return {
    products,
    productName,
    productPrice,
    productId,
    loading,
    error,
    setProductName,
    setProductPrice,
    loadProducts,
    saveProduct,
    editProduct,
    removeProduct,
    clearForm,
  };
}
