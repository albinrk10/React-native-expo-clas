import type { Ubicacion } from '../models/Ubicacion';

export interface LocationService {
  obtenerUbicacionActual(): Promise<Ubicacion>;
}
