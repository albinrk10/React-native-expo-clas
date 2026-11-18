import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { NotaFoto } from '../../domain/models/NotaFoto';
import type { NotasRepository } from '../../domain/repositories/NotasRepository';
import type { FotoService } from '../../domain/services/FotoService';
import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';
import { NotaFotoCard } from '../components/NotaFotoCard';
import { StateMessage } from '../components/StateMessage';

export function NotasFotoScreen({ notasDatabase, fotoService }: { notasDatabase: NotasRepository; fotoService: FotoService }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fotoUri, setFotoUri] = useState<string | null>(null);
  const [notas, setNotas] = useState<NotaFoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarNotas = useCallback(async () => {
    try {
      setLoading(true);

      // TODO 1:
      // Inicializar la base de datos.
      await notasDatabase.inicializar();

      // TODO 2:
      // Listar las notas guardadas.
      const data = await notasDatabase.listar();

      // TODO 3:
      // Guardar las notas en el estado.
      setNotas(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'No se pudieron cargar las notas.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [notasDatabase]);

  useEffect(() => {
    void Promise.resolve().then(cargarNotas);
  }, [cargarNotas]);

  const ejecutar = async (accion: () => Promise<void>) => {
    try {
      setLoading(true);
      setError(null);
      await accion();
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Ocurrio un error.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const tomarFoto = () =>
    ejecutar(async () => {
      const uri = await fotoService.tomarFoto();
      if (uri) setFotoUri(uri);
    });

  const seleccionarFoto = () =>
    ejecutar(async () => {
      const uri = await fotoService.seleccionarDeGaleria();
      if (uri) setFotoUri(uri);
    });

  const guardarNota = () =>
    ejecutar(async () => {
      if (!titulo.trim() || !descripcion.trim()) {
        setError('Completa titulo y descripcion.');
        return;
      }

      // TODO 4:
      // Guardar la nota en SQLite.
      // Recuerda: se guarda fotoUri, no la imagen pesada.
      await notasDatabase.crear({
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
        fotoUri,
        fechaRegistro: new Date().toISOString(),
      });

      setTitulo('');
      setDescripcion('');
      setFotoUri(null);

      // TODO 5:
      // Volver a cargar la lista desde SQLite.
      await cargarNotas();
    });

  const eliminarNota = (id: number) =>
    ejecutar(async () => {
      await notasDatabase.eliminar(id);
      await cargarNotas();
    });

  const confirmarEliminar = (id: number) => {
    Alert.alert('Eliminar nota', '¿Deseas eliminar esta nota?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => eliminarNota(id) },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 10 · EJERCICIO 3
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Notas con foto</Text>
        <Text className="mt-1 text-slate-500">
          Registrar una nota, agregar foto y persistir la información con SQLite.
        </Text>

        <View className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
          <AppInput label="Titulo" onChangeText={setTitulo} placeholder="Ej. Producto entregado" value={titulo} />
          <AppInput
            label="Descripcion"
            onChangeText={setDescripcion}
            placeholder="Ej. Se adjunta evidencia del producto."
            value={descripcion}
          />

          {fotoUri ? (
            <Image className="mb-4 h-40 w-full rounded-2xl" resizeMode="cover" source={{ uri: fotoUri }} />
          ) : (
            <View className="mb-4 h-32 items-center justify-center rounded-2xl bg-slate-100">
              <Text className="font-bold text-slate-400">Preview de foto</Text>
            </View>
          )}

          {error && <StateMessage message={error} type="error" />}

          <View className="mt-4 gap-3">
            <View className="flex-row gap-3">
              <View className="flex-1">
                <AppButton disabled={loading} onPress={tomarFoto} title="Camara" />
              </View>
              <View className="flex-1">
                <AppButton disabled={loading} onPress={seleccionarFoto} title="Galeria" variant="secondary" />
              </View>
            </View>

            <AppButton disabled={loading} onPress={guardarNota} title="Guardar en SQLite" />
          </View>
        </View>

        <Text className="mb-3 mt-5 text-lg font-black text-slate-900">
          Notas guardadas {loading ? '...' : ''}
        </Text>

        <FlatList
          data={notas}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => <NotaFotoCard nota={item} onEliminar={confirmarEliminar} />}
          ListEmptyComponent={
            <Text className="mt-8 text-center text-slate-500">
              Todavia no hay notas guardadas.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

