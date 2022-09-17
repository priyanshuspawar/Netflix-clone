import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Discover from '../screens/Discover';
import {vh, vw} from '../utils/dimension';
import Downloads from '../screens/Downloads';
import Content from '../screens/Content';


export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'black', borderTopWidth: 0,height:vh(54)},
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle:styles.label,
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../assets/home.png')
                    : require('../assets/unhome.png')
                }
                style={styles.icon}
                resizeMode={'contain'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="discover"
          component={Discover}
          options={{
            tabBarLabel: 'Discover',
            tabBarLabelStyle:styles.label,
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../assets/search.png')
                    : require('../assets/unsearch.png')
                }
                style={styles.icon}
                resizeMode={'contain'}
              />

            ),
       }}
        />

      <Tab.Screen name='Downloads' component={Downloads} options={{
        tabBarLabel:"Downloads",
        tabBarLabelStyle:styles.label,
        tabBarIcon:({focused})=>{
        return(<Image source={focused?require("../assets/down.png"):require("../assets/undown.png")} style={styles.icon}/>)}
    }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon:{
    height:vh(20),
    width:vw(21),
    marginTop:vh(8)
  },
  label:{
    fontSize:9,fontFamily:"Montserrat-SemiBold",marginBottom:2
  }
});
