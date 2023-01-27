import React, { Component } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonCircular } from './src/components/ButtonCircular';

//Clas Components
class App extends Component {
  constructor() {
    super();
    this.state = { //Aqui se inicializan los valores
      counter: 0,
    };
  }
  componentDidMount() {
    console.log('Similar al useffect []- que se ejecuta una vez al inicio');
  }

  // componentDidUpdate() {
  //   console.log('Similar al useffect- que se ejecuta cada render aunque el estado sea el mismo ');
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
        console.log("Entro aqui solo cuando hay un cambio de estado");
    }
  }
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>contador:{this.state.counter}</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <ButtonCircular titulo="+" presionar={() => this.setState({ counter: this.state.counter + 1 })} /> 
          <ButtonCircular titulo="-" presionar={() => this.setState({ counter: this.state.counter - 1 })} />
          <ButtonCircular titulo="0" presionar={() => this.setState({ counter: 0})} />
        </View>
      </View>

    );
  }
}
export default App;

