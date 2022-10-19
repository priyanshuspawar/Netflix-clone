import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators} from '@react-navigation/stack';
import Details from '../screens/SignIn/Details';
import Content from '../screens/Content';
import TabNavigation from '../TabNavigation';
import Splash from '../screens/Splash';
import Search from '../screens/Search/Search';
import Opening from '../screens/Opening';
import RegisterUser from '../screens/RegisterUser';

const Stack = createStackNavigator();
export default function Navgation(props: any) {
  const OpenConfig = {
    animation: 'timing',
    config: {duration: 300},
  };
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
    }
    
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Details" component={Details} options={{
          gestureDirection: 'vertical',
          transitionSpec: {
            open: OpenConfig,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}/>
        <Stack.Screen name="Opening" component={Opening} options={{transitionSpec:{open:OpenConfig,close:closeConfig},cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="SignUp" component={RegisterUser} options={{transitionSpec:{open:OpenConfig,close:closeConfig},cardStyleInterpolator:CardStyleInterpolators.forBottomSheetAndroid}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
