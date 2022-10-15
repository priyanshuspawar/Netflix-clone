import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/SignIn/Details';
import Content from '../screens/Content';
import TabNavigation from '../TabNavigation';
import Splash from '../screens/Splash'
import Search from '../screens/Search/Search';
import Opening from '../screens/Opening';


export default function Navgation(props: any) {
 

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name='Opening' component={Opening}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
