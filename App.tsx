import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Page/Login'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/store'
import Navgation from './src/Navigation'
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'




export default function App() {
  
  React.useEffect(()=>
  {LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  
  },[])


  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
      <Navgation/>
      </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({

})