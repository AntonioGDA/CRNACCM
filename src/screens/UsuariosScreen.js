import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


export const UsuariosScreen = () => {
    const [listaUsuarios,setListaUsuarios]=useState([]);
    const getUsers=async()=>{

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setListaUsuarios(json);
          } catch (error) {
            Alert.alert("Ocurrio este error"+error);
          }
    }
    useEffect(() => {
        getUsers();
    },[])
    
    
    const UserElement=({itemName,iconName})=>{
       return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.10}}>
                <Icon name={iconName} size={30} color="#900"/>
            </View>
        
            <View style={{flex:0.90}}>
                <Text style={{color:'black'}}>{itemName}</Text>
            </View>
        
        </View>
        )
        }
        
    
    const renderItem=({item})=>(
        <View style={{ flexDirection: "column", padding: 20, flex: 1 }}>         
            <UserElement itemName={item.name} iconName="user" />
            <UserElement itemName={item.email} iconName="mail" />
            <UserElement itemName={[item.address.street," ,",item.address.suite," ,",item.address.zipcode]} iconName="home" />
            <UserElement itemName={item.phone} iconName="phone" />
        </View>
    
    )
    
  return (
    <FlatList
        data={listaUsuarios}
        renderItem={renderItem(item)}
        keyExtractor={({ id }, index) => id}
      />
  )
}
