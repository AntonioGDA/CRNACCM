import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegistroUsuario = (props) => {

    const[nombre,setNombre]=useState("");
    
    const{navigation}=props;

  return (
  <View style={{flex:1}}>
    <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={setNombre}
        value={nombre}
    />   
    <Button title="Ver Usuario" onPress={()=>navigation.navigate('VisualizarUsuario',{nombre:nombre})}></Button>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
       height:40,
       margin:12, 
       backgroundColor:'white'   
    }
})