import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Register from './Register'
import Connexion from './Connexion'

const Stack = createNativeStackNavigator();




const ConnexionNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='connexion' component={Connexion}/>
        <Stack.Screen name='inscription' component={Register}/>
    </Stack.Navigator>
  )
}


export default ConnexionNavigation

const styles = StyleSheet.create({})