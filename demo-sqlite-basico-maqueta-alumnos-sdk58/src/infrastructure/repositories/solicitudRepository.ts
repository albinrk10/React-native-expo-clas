import type { SQLiteDatabase } from 'expo-sqlite';

import type { CrearSolicitudDto, SolicitudLocal } from '../../domain/models/SolicitudLocal';
import type { SolicitudRepository } from '../../domain/repositories/SolicitudRepository';


export function createSolicitudRepository(db:SQLiteDatabase):SolicitudRepository{
  return {
 //TODO;LISTAR
  async listar(): Promise<SolicitudLocal[]> {
    console.log('[SQL SELECT] Listando solicitudes');

    return db.getAllAsync<SolicitudLocal>(`
      SELECT id, titulo, descripcion, estado, fechaRegistro
      FROM solicitudes
      ORDER BY id DESC;
      `);
  },

 //TODO: CREAR
  async crear(dto: CrearSolicitudDto): Promise<void> {
    console.log('[SQL INSERT] Insertando solicitud',dto);
    await db.runAsync(
      `
      INSERT INTO solicitudes (titulo, descripcion, estado, fechaRegistro)
      VALUES(?, ?, 'PENDIENTE',?);
      `,
      [dto.titulo, dto.descripcion, new Date().toISOString()]
    );

  },

//TODO: Actualizar
  async cambiarEstado(solicitud: SolicitudLocal): Promise<void> {
    const nuevoEstado = solicitud.estado === 'PENDIENTE' ? 'FINALIZADO' :'PENDIENTE';
   
    console.log('[SQL UPDATE] Cambiando estado',{
    id:solicitud.id,
    nuevoEstado
   });
   
   await db.runAsync(
    `
    UPDATE solicitudes
    SET estado = ?
    WHERE id = ?
    `,
    [nuevoEstado, solicitud.id]
   );
  
  },

//TODO:Eliminar---
  async eliminar(id: number): Promise<void> {
    console.log('[SQL DELETE] Eliminado solicitud',{id});
    await db.runAsync(
      `
       DELETE FROM solicitudes
       WHERE id=?;
      `,
      [id],
    )
  }
}

}