

import { ProductosProvider } from "@/presentation/context/ProductosContext"
import "../global.css"
import { Stack } from "expo-router"



export default function RootLayout(){
  return(
    <ProductosProvider>
    <Stack screenOptions={{headerShown:false}}/>
    </ProductosProvider>
  )
}