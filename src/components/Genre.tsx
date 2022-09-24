import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vw } from '../utils/dimension'

export default function Genre(props:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.genre1}</Text>
      <Text style={styles.text}>{props.genre2}</Text>
      <Text style={styles.text}>Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        position:"absolute",
        width:vw(375),
        top:60,
    },
    text:{
        fontSize:12,
        color:"white",
        fontFamily:"Montserrat-Medium"
    }
})