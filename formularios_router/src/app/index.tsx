import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index(){
  return(
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold mb-8">⌚ Rutas con Expo Router</Text>
       
       <Link href="/estilos" asChild>
        <Pressable className="mb-4 rounded-xl bg-blue-600 px-6 py-3">
          <Text className="text-white">Ir a NativeWind ➡</Text>
        </Pressable>
       </Link>

       <Link href="/formularios" asChild>
        <Pressable className="rounded-xl bg-green-600 px-6 py-3">
          <Text className="text-white">Ir a Formulario ➡</Text>
        </Pressable>
       </Link>






    </View>
  )
}