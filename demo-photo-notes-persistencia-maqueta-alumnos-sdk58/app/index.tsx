import { notasDatabase } from '../src/infrastructure/database/notasDatabase';
import { fotoService } from '../src/infrastructure/services/fotoService';
import { NotasFotoScreen } from '../src/presentation/screens/NotasFotoScreen';

// Punto de composición: presentation recibe implementaciones de contratos de domain.
export default function IndexRoute() {
  return <NotasFotoScreen notasDatabase={notasDatabase} fotoService={fotoService} />;
}
