import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from './Details'
import endpoints from '../../utils/endpoints'




export default function Login(props:any) {

  return (
    <View style={styles.container}>
      {/* <Details /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center"
  }
})