import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Linking } from 'react-native';

import type { Ubicacion } from '../../domain/models/EvidenciaDispositivo';
import type { DeviceService } from '../../domain/services/DeviceService';


export const deviceService: DeviceService = {
  async tomarFoto(): Promise<string | null> {
    console.log('[TODO] Permiso de cámara', ImagePicker);

    // TODO 1:
    // Pedir permiso con ImagePicker.requestCameraPermissionsAsync()
    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if(!permiso.granted){
      throw new Error('Permiso de camara denegado.')
    }

    // TODO 2:
    // Abrir cámara con ImagePicker.launchCameraAsync(...)
    console.log('[DEVICE OPEN] Camara');
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect:[4,3],
      quality: 0.7
    });

    // TODO 3:
    // Si el usuario no cancela, retornar result.assets[0].uri
    if(result.canceled){
      console.log('[DEVICE RESPONSE] Foto Capturada');
      return null
    }

    console.log('[DEVICE RESPONSE] Foto Capturada' ,result.assets[0].uri);
    return result.assets[0].uri
  },

  async seleccionarImagen(): Promise<string | null> {
    console.log('[TODO] Permiso de galería', ImagePicker);

    // TODO 4:
    // Pedir permiso con ImagePicker.requestMediaLibraryPermissionsAsync()
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!permiso.granted){
      throw new Error('Permiso de galeria denegado');
    }

    // TODO 5:
    // Abrir galería con ImagePicker.launchImageLibraryAsync(...)
    console.log('[DEVICE OPEN GALERIA');
    const result= await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing:true,
      aspect:[4,3],
      quality:0.7,
    })

    // TODO 6:
    // Si el usuario no cancela, retornar result.assets[0].uri
    if(result.canceled){
      console.log('[DEVICE CANCEL] Galeria cancelada');
      return null;
    }

    console.log('[DEVICE RESPONSE] Imagen Seleccionada',result.assets[0].uri)
    return result.assets[0].uri
    
  },

  async obtenerUbicacionActual(): Promise<Ubicacion> {
    console.log('[TODO] Permiso de ubicación', Location);

    // TODO 7:
    // Pedir permiso con Location.requestForegroundPermissionsAsync()
    const permiso = await Location.requestForegroundPermissionsAsync();
    if(permiso.status != 'granted'){
      throw new Error('Permiso de ubicacion denegado.');
    }

    // TODO 8:
    // Obtener ubicación con Location.getCurrentPositionAsync(...)
    console.log('[GPS REQUEST] Obtener ubicacion actual');
    const location = await Location.getCurrentPositionAsync({
      accuracy:Location.Accuracy.Balanced,
    });

    // TODO 9:
    // Retornar { latitude, longitude }
    const ubicacion = {
      latitude :location.coords.latitude,
      longitude:location.coords.longitude
    }
    console.log('[GPS RESPONSE]',ubicacion);
    return ubicacion
    

  },

  async abrirMapa(ubicacion: Ubicacion): Promise<void> {
    console.log('[TODO] Abrir mapa', ubicacion, Linking);

    // TODO 10:
    // Construir URL de Google Maps:
    const url =`https://www.google.com/maps/search/?api=1&query=${ubicacion.latitude},${ubicacion.longitude}`
    // https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE
    //
    // Luego abrir con Linking.openURL(url)
    console.log('[Abriendo Mapa]',url);
    await Linking.openURL(url)
  },
};
