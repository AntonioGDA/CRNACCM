import React from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

export const ButtonCircular = (props) => {
  const{titulo,presionar,testID}=props; //desestructuracion de las propieades
  return (
    <View style={{marginHorizontal:10}}>
         <TouchableOpacity testID={testID} style={styles.button} onPress={presionar}><Text style={styles.texto}>{titulo}</Text></TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    button:{
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'red',
      padding:10,
      width:50,
      borderRadius:100,
    },
    texto:{
      fontSize:25
    }
  
  })
