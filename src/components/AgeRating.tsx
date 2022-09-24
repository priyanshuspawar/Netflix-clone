import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vw } from './dimension'

const AgeRating = (props:any) => {
  return (
    <View style={styles.container}>
      {props.rating?(<Text style={styles.text}> A </Text>):(<Text style={styles.text}> U / A </Text>)}
    </View>
  )
}

export default AgeRating

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#303030",
        paddingVertical:vh(2),
        paddingHorizontal:vw(2),
        borderRadius:4
    },
    text:{
        color:"#707070",
        fontFamily:"Montserrat-Bold",
        fontSize:12,
        textAlign:"center",

        
    }
})