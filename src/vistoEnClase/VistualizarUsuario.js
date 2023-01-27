import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const VisualizarUsuario = (props) => {
    console.log(props);
    const{nombre}=props.route.params
  return (
  <View><Text> Hola pantalla 2 {nombre}</Text></View>
  )
}
