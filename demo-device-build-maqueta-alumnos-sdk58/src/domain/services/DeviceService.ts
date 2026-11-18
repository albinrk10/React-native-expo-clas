import type { Ubicacion } from '../models/EvidenciaDispositivo';

export interface DeviceService {
  tomarFoto(): Promise<string | null>;
  seleccionarImagen(): Promise<string | null>;
  obtenerUbicacionActual(): Promise<Ubicacion>;
  abrirMapa(ubicacion: Ubicacion): Promise<void>;
}
