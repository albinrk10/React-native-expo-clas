import * as SQLite from 'expo-sqlite';

import type { NotaFoto } from '../../domain/models/NotaFoto';
import type { NotasRepository } from '../../domain/repositories/NotasRepository';

let database: SQLite.SQLiteDatabase | null = null;

async function obtenerConexion() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('notas_foto.db');
  }

  return database;
}

export const notasDatabase: NotasRepository = {
  async inicializar() {
    const db = await obtenerConexion();

    // TODO 1:
    // Crear la tabla notas_foto si no existe.
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS notas_foto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        fotoUri TEXT,
        fechaRegistro TEXT NOT NULL
      );
    `);
    console.log('[DB INIT] Tabla notas_foto lista')
  },

  async listar(): Promise<NotaFoto[]> {
    const db = await obtenerConexion();

    // TODO 2:
    // Consultar las notas guardadas y ordenarlas desde la ultima registrada.
    const notas= await db.getAllAsync<NotaFoto>(
      'SELECT id, titulo, descripcion, fotoUri, fechaRegistro FROM notas_foto ORDER BY id DESC;'
    );
    console.log('[DB SELECT]', notas.length);
    return notas;
  },

  async crear(data: Omit<NotaFoto, 'id'>): Promise<void> {
    const db = await obtenerConexion();

    // TODO 3:
    // Insertar titulo, descripcion, fotoUri y fechaRegistro.
    await db.runAsync(
      `INSERT INTO notas_foto (titulo, descripcion, fotoUri, fechaRegistro)
       VALUES (?, ?, ?, ?);`,
      [data.titulo, data.descripcion, data.fotoUri, data.fechaRegistro]
    );

    console.log('[DB INSERT]', data);
  },

  async eliminar(id: number): Promise<void> {
    const db = await obtenerConexion();

    // TODO 4:
    // Eliminar una nota usando su id.
    await db.runAsync('DELETE FROM notas_foto WHERE id = ?;', [id]);

    console.log('[DB DELETE] Nota eliminada', id);
  },
};

