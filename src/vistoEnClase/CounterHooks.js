import React, { useState,useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { ButtonCircular } from '../components/ButtonCircular'

//Functional Component
const CounterHook = () => {
  
  //   useEffect(() => {
  //     console.log("me inicializo solo la primera vez")
  //   }, [])//Los corchetes son la distinción entre uno y el otro 
 
  //  useEffect(() => {
  //    console.log("Paso por aqui cada vez que cambie el estado")
  //  })

  const[counter,setCounter]=useState(0); //Hooks

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ textAlign: 'center', fontSize: 30}}>contador:{counter}</Text>
    <View  style={{ flexDirection: 'row',alignSelf:'center',marginTop:20}}>
     <ButtonCircular testID="BotonCircularSuma" titulo="+" presionar={() => setCounter(counter + 1)}/>
     <ButtonCircular testID="BotonCircularResta" titulo="-" presionar={() => setCounter(counter - 1)}/>
     <ButtonCircular testID="BotonCircularCero" titulo="0" presionar={() => setCounter(0)}/>
    </View>
  </View>
  )
}
export default CounterHook