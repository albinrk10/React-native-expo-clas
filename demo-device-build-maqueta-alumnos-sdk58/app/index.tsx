import { deviceService } from '../src/infrastructure/services/deviceService';
import { EvidenciasScreen } from '../src/presentation/screens/EvidenciasScreen';

// Punto de composición: presentation recibe el contrato implementado en infrastructure.
export default function IndexRoute() {
  return <EvidenciasScreen deviceService={deviceService} />;
}
