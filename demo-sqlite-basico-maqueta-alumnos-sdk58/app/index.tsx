import { useMemo } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

import { createSolicitudRepository } from '../src/infrastructure/repositories/solicitudRepository';
import { SolicitudesScreen } from '../src/presentation/screens/SolicitudesScreen';

// Punto de composición: Expo SQLite se conecta al contrato usado por presentation.
export default function IndexRoute() {
  const db = useSQLiteContext();
  const repository = useMemo(() => createSolicitudRepository(db), [db]);
  return <SolicitudesScreen repository={repository} />;
}
