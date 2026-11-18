import * as Location from 'expo-location';

import type { Ubicacion } from '../../domain/models/Ubicacion';
import type { LocationService } from '../../domain/services/LocationService';

export const locationService: LocationService = {
  async obtenerUbicacionActual(): Promise<Ubicacion> {
    // TODO 1:
    // Pedir permiso con Location.requestForegroundPermissionsAsync().
    console.log('[GPS REQUEST] Solicitando permiso de ubicacion');
    const {status} = await Location.requestForegroundPermissionsAsync();

    // TODO 2:
    // Si el permiso no fue aceptado, lanzar un error.

    if(status !== 'granted'){
    console.log('[GPS Error] No permiso de ubicacion');
    throw new Error('Permiso de ubicacion denegad0.');
    }

    // TODO 3:
    // Obtener la posicion actual con Location.getCurrentPositionAsync().
    console.log('[GPS REQUEST] Obteniendo coordenadas actuales');
    const location = await Location.getCurrentPositionAsync({});
    



    // TODO 4:
    // Retornar un objeto con latitude y longitude.

    const ubicacion={
      latitude :location.coords.latitude,
      longitude:location.coords.longitude
    };
    console.log('[GPS RESPONSE]',ubicacion);
    return ubicacion
    
  },
};


