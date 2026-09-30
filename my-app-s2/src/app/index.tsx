
import { UserCard } from '@/components/UserCard';
import { Usuario } from '@/types/Usuario';
import { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const [docente] = useState<Usuario>({
      id:2,
      nombre: 'Albin Hinostroza', 
      edad: 29,
      rol: 'Docente',
      activo: true
     });

  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>App Movil</Text>
      </View>
      <View style={styles.content}>
       <UserCard user={docente}/>
      </View>

     </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1, 
    backgroundColor: '#eef2f7',
  },
  header: {
    paddingTop: 12,
    paddingBottom: 4,
    alignItems: 'center',
  },
  headerTitle: {
   
    fontSize: 18,
    
    fontWeight: '800',
    
    color: '#5b21b6',
  },
  content: {
    
    flex: 1,
   
    justifyContent: 'center',
    
    marginTop: -8,
    
    padding: 20,
  },
});
