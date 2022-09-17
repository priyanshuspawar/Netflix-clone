import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Page/Login';
import Home from '../screens/Home';
import Details from '../screens/Page/Details';
import Content from '../screens/Content';
import TabNavigation from '../TabNavigation';


export default function Navgation(props:any) {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Details' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})