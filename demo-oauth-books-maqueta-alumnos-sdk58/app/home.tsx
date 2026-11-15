import { BooksScreen } from '../src/presentation/screens/BooksScreen';
import { booksRepository } from '../src/infrastructure/api/booksApi';

export default function HomeRoute() {
  return <BooksScreen booksRepository={booksRepository} />;
}
