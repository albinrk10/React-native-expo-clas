import * as ImagePicker from 'expo-image-picker';
import type { FotoService } from '../../domain/services/FotoService';

export const fotoService: FotoService = {
  async tomarFoto(): Promise<string | null> {
    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de camara denegado.');
    }

    // TODO:
    // Abrir la camara y retornar la URI de la imagen.
     console.log('[Camara Open] Cámara cancelada');
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[Camara CANCEL] Cámara cancelada');
      return null;
    }

    console.log('[DEVICE RESPONSE] Foto capturada', result.assets[0].uri);
    return result.assets[0].uri;
  },

  async seleccionarDeGaleria(): Promise<string | null> {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de galeria denegado.');
    }

    // TODO:
    // Abrir la galeria y retornar la URI de la imagen.
    console.log('[DEVICE OPEN] Galería');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[GALLERY CANCEL] Galería cancelada');
      return null;
    }


    console.log('[GALLERY RESPONSE] Imagen seleccionada', result.assets[0].uri);
    return result.assets[0].uri;
  },
};

