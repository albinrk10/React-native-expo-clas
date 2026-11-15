export type EstadoSolicitud = "PENDIENTE" | 'FINALIZADO';

export type SolicitudLocal = {
id: number;
titulo: string;
descripcion:string;
estado:EstadoSolicitud;
fechaResgistro:string;
}

export type CrearSolicitudDto = {
  titulo: string;
  descripcion: string;
}