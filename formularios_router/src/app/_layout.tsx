import { Stack } from "expo-router"
import "../global.css"

export default function RootLayout(){


  return(
    <Stack>
      <Stack.Screen name="index" options={{title:'Inicio'}}/>
      <Stack.Screen name="estilos" options={{title:'Estilos'}}/>
      <Stack.Screen name="formularios" options={{title:'formularios'}}/>
    </Stack>
  )

}