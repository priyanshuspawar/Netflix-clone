import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Discover = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>Coming soon.....</Text>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center"
  }
})