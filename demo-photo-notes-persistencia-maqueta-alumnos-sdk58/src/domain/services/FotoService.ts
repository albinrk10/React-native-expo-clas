export interface FotoService {
  tomarFoto(): Promise<string | null>;
  seleccionarDeGaleria(): Promise<string | null>;
}
