import type { Book } from '../models/Book';

export interface BooksRepository {
  listar(): Promise<Book[]>;
}
