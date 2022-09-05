import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categorytxt(props:any) {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    },
    text:{
        color:"white",
        textAlign:"left"
    }
})