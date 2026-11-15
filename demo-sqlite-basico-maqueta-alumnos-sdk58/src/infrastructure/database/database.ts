import type { SQLiteDatabase } from 'expo-sqlite';

export async function inicializarBaseDatos(db: SQLiteDatabase) {
  console.log('[TODO DB INIT] Crear tabla solicitudes', db.databasePath);

  // TODO 1:
 await db.execAsync(`
   PRAGMA journal_mode = WAL;

   CREATE TABLE IF NOT EXISTS solicitudes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      estado TEXT NOT NULL DEFAULT 'PENDIENTE',
      fechaRegistro TEXT NOT NULL
   );
  `);
}
