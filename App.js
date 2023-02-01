import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistroUsuarioScreen } from './src/screens/RegistroUsuarioScreen';
import { VisualizarUsuarioScreen } from './src/screens/VistualizarUsuarioScreen';
import { UsuariosScreen } from './src/screens/UsuariosScreen';
import CounterHook from './src/vistoEnClase/CounterHooks';

const Stack = createNativeStackNavigator(); //Creamos nuestro StakNavigator

const App=()=>{
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="CounterHook" //Aqui definimos a cual entrar primero(si no existe se ira en orden de arriba para abajo)
      
      screenOptions={{headerShown:true}} //Si deseamos mostrar el header o no                                          
      >      
       <Stack.Screen name="CounterHook" options={{title:'Registro'}} component={CounterHook}/>                                  
        <Stack.Screen name="RegistroUsuarioScreen" options={{title:'Registro'}} component={RegistroUsuarioScreen}/> 
        <Stack.Screen name="VisualizarUsuarioScreen"  options={{title:'Usuario'}} component={VisualizarUsuarioScreen}/>
        <Stack.Screen name="UsuariosScreen" options={{title:'Usuarios'}} component={UsuariosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;