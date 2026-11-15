import type { CrearSolicitudDto, SolicitudLocal } from '../models/SolicitudLocal';

export interface SolicitudRepository{
  listar():Promise<SolicitudLocal[]>;
  crear(dto:CrearSolicitudDto):Promise<void>;
  cambiarEstado(solicitud:SolicitudLocal):Promise<void>;
  eliminar(id: number):Promise<void>;
}