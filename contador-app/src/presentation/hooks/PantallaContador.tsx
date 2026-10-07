import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import ContadorDisplay from "../components/ContadorDisplay";


export default function PantallaContador(){

  const  [clics, setClics] = useState<number>(0)
   
  useEffect(() => {
    if(clics === 10 ){
        Alert.alert('!Felicidades!', 'Has llegado a los 10 clics');
    }
  },[clics] )


  return(
    <View style={styles.contenedor}>

     <ContadorDisplay 
     titulo ={'Numero de clic'}
     valor={clics} 
     ></ContadorDisplay>

     {/* <ContadorBoton 
      titulo={'Sumar clic'}
      color={'#215030'}
      alPresionar={() => setClics(clics +1)}
      icono="+"
     ></ContadorBoton> */}
     <Button
     title='Sumar clic'
     onPress={()=> setClics(clics+1)}
     color="#20e44a"
     />
     
     <View style={{height:20}}/> 
     
     <Button
     title="Restar clic"
     onPress={()=> setClics(clics-1)}
     color="#191c1a"
     />
     {/* <ContadorBoton
        titulo={'Restar clic'}
        color={'#2d20e4'}
        alPresionar={() => setClics(clics - 1)}
        icono="-"
     ></ContadorBoton> */}


    </View>
  )



}


const styles = StyleSheet.create({
     contenedor:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#f7f4f4'   
     }

})
