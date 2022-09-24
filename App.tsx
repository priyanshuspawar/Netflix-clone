import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Page/Login'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import Navgation from './src/Navigation'
import { LogBox } from 'react-native';




export default function App() {
  
  React.useEffect(()=>
  {LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  
  },[])


  return (
    <Provider store={store} >
      <Navgation/>
      </Provider>
  )
}

const styles = StyleSheet.create({

})