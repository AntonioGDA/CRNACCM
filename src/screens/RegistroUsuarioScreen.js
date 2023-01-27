import React, { useRef, useState } from 'react'
import { View, StyleSheet,TextInput, Button} from 'react-native'


export const RegistroUsuarioScreen = (props) => {
  const [nombre,setNombre]=useState('');
  const [direccion,setDireccion]=useState('');
  const [edad,setEdad]=useState('');

  //Usamos el Ref para referencias a nuestro siguiente componente
  const inputRefEdad = useRef(); //Aqui declaramos nuestras referencias con este hook
  const inputRefDireccion = useRef();

  const {navigation}=props;

  return (
    <View style={{ flex: 1,top:15 }}>
       <TextInput
        style={styles.input}
        autoFocus={true} //Se pone focus a este componente cada vez que entra 
        placeholder="Nombre"
        placeholderTextColor="gray"
        returnKeyType='next' //Mostramos el tipo de flecha a mostrar si es next o done
        onChangeText={setNombre}
        value={nombre}
        onSubmitEditing={()=>inputRefEdad.current.focus()} //Aqui hacemos la referencia al siguiente
      />
     
      <TextInput
        style={styles.input}
        ref={inputRefEdad} //aqui asociamos referencia
        placeholder="Edad"
        placeholderTextColor="gray"
        returnKeyType='next' //Mostramos el tipo de flecha a mostrar si es next o done
        keyboardType="numeric" //El tipo de teclado a usar
        onChangeText={setEdad}
        value={edad}
        onSubmitEditing={()=>inputRefDireccion.current.focus()} //Aqui hacemos la referencia al siguiente
      />

    <TextInput
        style={styles.inputMultiLine}
        ref={inputRefDireccion} //aqui asociamos referencia
        placeholder="Direccion"
        placeholderTextColor="gray"
        multiline={true} //le decimos que es multilinea
        onChangeText={setDireccion} 
        value={direccion}
      />
      
      <View style={styles.boton}>
      <Button style={styles.boton} title='ver usuario' 
      onPress={()=>navigation.navigate('VisualizarUsuarioScreen',
      {nombre:nombre,edad:edad,direccion:direccion})} //Se mandan los parametros(Esto se vio en clase solo para ejemplo didacticos, 
                                                      //pero no es recomendable enviar este tipo de info por aqui, si no enviar ID o algun identificador
                                                      //  )
      />    
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  input: {
    color:'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white'
  },
  inputMultiLine: {
    color:'black',
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white'
  },
  boton:{
    top:15,
    width:150,
    alignSelf:'center'

  }
});