import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Details from '../screens/SignIn/Details';
import Content from '../screens/Content';
import TabNavigation from '../TabNavigation';
import Splash from '../screens/Splash';
import Search from '../screens/Search/Search';
import Opening from '../screens/Opening';
import RegisterUser from '../screens/RegisterUser';
import MovieCategoryScreen from '../screens/MovieCategoryScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
export default function Navgation(props: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            gestureDirection: 'vertical',
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{
            transitionSpec: {
              open: {animation: 'timing',config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            gestureEnabled:false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Movies"
          component={MovieCategoryScreen}
          options={{
            gestureDirection: 'vertical',
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Opening"
          component={Opening}
          options={{
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={RegisterUser}
          options={{
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
