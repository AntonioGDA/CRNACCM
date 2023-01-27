import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonCircular } from './src/components/ButtonCircular';

//Functional Component
const App = () => {
  
    useEffect(() => {
      console.log("me inicializo solo la primera vez")
    }, [])//Los corchetes son la distinción entre uno y el otro 
 
   useEffect(() => {
     console.log("Paso por aqui cada vez que cambie el estado")
   })

  const[counter,setCounter]=useState(0); //Hooks

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ textAlign: 'center', fontSize: 30}}>contador:{counter}</Text>
    <View  style={{ flexDirection: 'row',alignSelf:'center',marginTop:20}}>
     <ButtonCircular titulo="+" presionar={() => setCounter(counter + 1)}/>
     <ButtonCircular titulo="-" presionar={() => setCounter(counter - 1)}/>
     <ButtonCircular titulo="0" presionar={() => setCounter(0)}/>
    </View>
  </View>
  )
}
export default App