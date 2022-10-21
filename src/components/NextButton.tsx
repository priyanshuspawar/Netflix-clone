import {Pressable ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimension'


const NextButton = (props:any) => {
  return (
    <Pressable onPress={props.change} disabled={props.disabled}>
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
    </Pressable>
  )
}

export default NextButton

const styles = StyleSheet.create({
    container:{
        width:vw(325),
        height:vh(65),
        backgroundColor:"#E50914",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:vh(190)
    },
    label:{
        fontFamily:"Montserrat-Medium",
        fontSize:20,
        color:"white",
        borderRadius:vh(4)
    }
})