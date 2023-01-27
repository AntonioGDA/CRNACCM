import React from 'react'
import { View,Text } from 'react-native'

export const VisualizarUsuarioScreen = (props) => {
//console.log(JSON.stringify(props))
//console.log(props.route.params)
const {nombre,edad,direccion}=props.route.params;
  return (
    <View style={{flex:1,margin:20}}>
      <Text style={{color:'black',fontSize:20}}>Nombre: {nombre}</Text>
      <Text style={{color:'black',fontSize:20}}>edad: {edad}</Text>
      <Text style={{color:'black',fontSize:20}}>Direccion: {direccion}</Text>
      </View>
  )
}
