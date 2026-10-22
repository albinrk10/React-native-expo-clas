import { Estudiante } from "@/domain/entities/Estudiante";

export type EstudianteAction =
  | { type: 'CARGAR'; payload: Estudiante[] }
  | { type: 'CREAR'; payload: Estudiante }
  | { type: 'ACTUALIZAR'; payload: Estudiante }
  | { type: 'ELIMINAR'; payload: string };

// AÑADIDO: reducer puro; devuelve un nuevo arreglo sin modificar el anterior.
// CREAR usa spread, ACTUALIZAR usa map y ELIMINAR usa filter.
// Ninguna acción persiste datos al cerrar o recargar la aplicación.

export function estudiantesReducer(
    state: Estudiante[],
     action: EstudianteAction
    ): Estudiante[] {
  switch (action.type) {
    case 'CARGAR':
      return action.payload;
    case 'CREAR':
      // Añade un registro conservando los anteriores.
     
      return [...state, action.payload];

    case 'ACTUALIZAR':
      // Reemplaza únicamente el registro que coincide con el id.
   
      return state.map((estudiante) =>
       estudiante.id === action.payload.id ? action.payload : estudiante
      );

    case 'ELIMINAR':
      // Conserva todos los registros salvo el eliminado.
      
      return state.filter((estudiante)=> estudiante.id !== action.payload);

    default:
      return state;
  }
}
