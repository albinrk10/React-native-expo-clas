import type { NotaFoto } from '../models/NotaFoto';

export interface NotasRepository {
  inicializar(): Promise<void>;
  listar(): Promise<NotaFoto[]>;
  crear(data: Omit<NotaFoto, 'id'>): Promise<void>;
  eliminar(id: number): Promise<void>;
}
