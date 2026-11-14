import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductCard } from '../components/ProductCard';
import { ProductForm } from '../components/ProductForm';
import { ErrorView, LoadingView } from '../components/StateViews';
import { useProductsApi } from '../hooks/useProductsApi';
import type { ProductsRepository } from '../../domain/repositories/ProductsRepository';

// MAQUETA PARA ALUMNOS
// Objetivo: completar src/data/repositories/axiosProductsRepository.ts usando Axios.
export function ProductsScreen({ repository }: { repository: ProductsRepository }) {
  const {
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
  } = useProductsApi(repository);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 8 · MAQUETA CRUD API
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Axios + CrudCrud</Text>
        <Text className="mb-4 mt-1 text-slate-500">
          Completa GET, POST, PUT y DELETE en /products. Mira los logs en consola.
        </Text>

        <ProductForm
          name={productName}
          price={productPrice}
          editing={productId !== null}
          onNameChange={setProductName}
          onPriceChange={setProductPrice}
          onSave={saveProduct}
          onCancel={clearForm}
        />

        <TouchableOpacity className="mt-3 items-center rounded-xl bg-slate-900 p-4" onPress={loadProducts}>
          <Text className="font-extrabold text-white">GET: cargar productos</Text>
        </TouchableOpacity>

        {loading && (
          <View className="mt-4">
            <LoadingView />
          </View>
        )}

        {error && !loading && (
          <View className="mt-4">
            <ErrorView mensaje={error} onReintentar={loadProducts} />
          </View>
        )}

        {!loading && !error && (
          <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ paddingBottom: 24, paddingTop: 16 }}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onEdit={() => editProduct(item)}
                onDelete={() =>
                  Alert.alert('DELETE product', `¿Eliminar ${item.name}?`, [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Eliminar', style: 'destructive', onPress: () => removeProduct(item) },
                  ])
                }
              />
            )}
            ListEmptyComponent={
              <Text className="mt-8 text-center text-slate-500">
                No hay productos. Crea uno con POST.
              </Text>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}
