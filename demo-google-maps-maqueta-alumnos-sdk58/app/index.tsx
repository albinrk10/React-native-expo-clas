import { locationService } from '../src/infrastructure/services/locationService';
import { MapaScreen } from '../src/presentation/screens/MapaScreen';

// Punto de composición: presentation recibe el servicio definido por domain.
export default function Index() {
  return <MapaScreen locationService={locationService} />;
}
