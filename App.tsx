import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/store'
import Navgation from './src/Navigation'
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'




export default function App() {
  
  React.useEffect(()=>
  {LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  
  },[])


  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
      <StatusBar translucent={true} backgroundColor={"transparent"}/>
      <Navgation/>
      </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({

})