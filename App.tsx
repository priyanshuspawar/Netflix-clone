import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import Login from './src/screens/Page/Login'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import Navgation from './src/Navigation'




export default function App() {

  React.useEffect(()=>{
    SplashScreen.hide();}
  )

  



  return (
    <Provider store={store} >
      <Navgation/>
      </Provider>
  )
}

const styles = StyleSheet.create({

})