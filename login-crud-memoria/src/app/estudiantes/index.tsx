import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Modal, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EstudianteCard } from '../../presentation/components/estudiantes/EstudianteCard';
import { useEstudiantes } from '../../presentation/context/EstudiantesContext';

export default function EstudiantesRoute() {

  const { estudiantes, eliminarEstudiante } = useEstudiantes();

  
  // AÑADIDO: búsqueda y filtro afectan la vista, sin modificar los registros.
  const [busqueda, setBusqueda] = useState('');
  const [pendiente, setPendiente] = useState<{ id: string; nombre: string } | null>(null);
  const [carreraFiltro, setCarreraFiltro] = useState('TODAS');

  
  const carreras = ['TODAS', ...new Set(estudiantes.map((item) => item.carrera))];

  
  // Si se elimina o edita el último registro de una carrera, vuelve a TODAS.
  const filtroActivo = carreras.includes(carreraFiltro) ? carreraFiltro : 'TODAS';

  const estudiantesFiltrados = estudiantes.filter((estudiante) => {
    const texto = busqueda.trim().toLowerCase();
    const coincideTexto =
      estudiante.nombre.toLowerCase().includes(texto) ||
      estudiante.correo.toLowerCase().includes(texto);
    const coincideCarrera =
      filtroActivo === 'TODAS' || estudiante.carrera === filtroActivo;

    return coincideTexto && coincideCarrera;
  });


  const confirmarEliminacion = (id: string, nombre: string) => {
    setPendiente({ id, nombre });
  };

  return (
    <View className="flex-1 bg-slate-50 px-6 pt-6">
      <View className="mb-6 flex-row items-center justify-between">
        <View>
          <Text className="text-sm font-bold uppercase tracking-widest text-indigo-600">Demo CRUD</Text>
          <Text className="text-3xl font-black text-slate-900">Estudiantes</Text>
          <Text className="mt-1 text-slate-500">{estudiantes.length} registros en memoria</Text>
        </View>
        <TouchableOpacity accessibilityLabel="Agregar estudiante" className="rounded-2xl bg-indigo-600 p-4" onPress={() => router.push('/estudiantes/nuevo')}>
          <Ionicons name="add" size={26} color="white" />
        </TouchableOpacity>
      </View>

     
      <View className="mb-3 flex-row items-center rounded-2xl border border-slate-200 bg-white px-4">
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput
          className="h-14 flex-1 px-3 text-base text-slate-800"
          placeholder="Buscar por nombre o correo"
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>

     
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4 max-h-12"
        contentContainerStyle={{ gap: 8 }}
      >
        {carreras.map((carrera) => {
          const seleccionado = filtroActivo === carrera;
          return (
            <TouchableOpacity
              key={carrera}
              className={`rounded-full px-4 py-2 ${seleccionado ? 'bg-indigo-600' : 'bg-slate-200'}`}
              onPress={() => setCarreraFiltro(carrera)}
            >
              <Text className={seleccionado ? 'font-bold text-white' : 'font-semibold text-slate-600'}>
                {carrera}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

   
      <FlatList
        
        data={estudiantesFiltrados}

       
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, flexGrow: 1 }}
       
        renderItem={({ item }) => (
          <EstudianteCard
            estudiante={item}
           
            onEditar={() => router.push({ pathname: '/estudiantes/[id]', params: { id: item.id } })}
            onEliminar={() => confirmarEliminacion(item.id, item.nombre)}
          />
        )}
       
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pb-24">
            <Text className="text-6xl">📭</Text>
            <Text className="mt-4 text-xl font-bold text-slate-700">Sin resultados</Text>
            <Text className="mt-2 text-center text-slate-500">Cambia el texto o el filtro seleccionado.</Text>
          </View>
        }
      />
      {/* AÑADIDO: confirmación compatible con Android, iOS y web. */}
      <Modal visible={pendiente !== null} transparent animationType="fade" onRequestClose={() => setPendiente(null)}>
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <View className="w-full max-w-md rounded-3xl bg-white p-6">
            <Text className="text-xl font-bold text-slate-900">Eliminar estudiante</Text>
            <Text className="my-4 text-slate-600">¿Deseas eliminar a {pendiente?.nombre}?</Text>
            <TouchableOpacity accessibilityRole="button" className="mb-3 rounded-xl bg-rose-600 p-4" onPress={() => {
              if (pendiente) eliminarEstudiante(pendiente.id);
              setPendiente(null);
            }}>
              <Text className="text-center font-bold text-white">Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" className="rounded-xl bg-slate-100 p-4" onPress={() => setPendiente(null)}>
              <Text className="text-center font-bold text-slate-700">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
