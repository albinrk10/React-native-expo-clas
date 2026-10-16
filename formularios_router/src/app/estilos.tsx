import { router } from "expo-router";
import { View, Text } from "react-native";

export default function Estilos(){
    return(
        <View className="flex-1 bg-white px-6 pt-10">
         <Text className="text-2xl font-bold mb-6">NativeWind</Text>
          
     <View className="bg-violet-600 p-4 roudend-xl mb-4">
         <Text className="text-white font-bold text-center">
            bg-violet-600 p-4 roudend-xl
        </Text>
    </View>

        <View className="borde-2 border-orange-500 p-4 rounded-xl mb-4">
         <Text className="text-orange-500 font-semibold text-center">
           border-2 border-orange-500
        </Text>
    </View>


    <View className="flex-row gap-3 mb-4">
        <View className="felx-1 bg-green-100 p-4 rounded-lg items-center">
          <Text className="text-green-700 font-bold">Hola</Text>
        </View>

        <View className="felx-1 bg-pink-100 p-4 rounded-lg items-center">
          <Text className="text-pink-700 font-bold">gap-3</Text>
        </View>
    </View>


    <Text 
    className="bg-gray-800 text-white text-center py-3 rounded-xl mt-4"
    onPress={()=> router.back()}
    >
      Volver Atras

    </Text>







        </View>
    ); 
}