import { View,StyleSheet, Text } from "react-native";


interface DisplayProps{
    titulo:string;
    valor:number;
}


export default function ContadorDisplay({titulo,valor}: DisplayProps){
  return(
     <View style={style.caja} >
     <Text style={style.textoTitulo}>{titulo}</Text>
     <Text style={style.textValor} >{valor}</Text>
     </View>
  )
}

const style = StyleSheet.create({
    caja:{padding:20 ,alignItems:'center'},
    textoTitulo:{fontSize:20, color:'#706e6e'},
    textValor:{fontSize:48, fontWeight :'bold', color:'#f11616'}
})

