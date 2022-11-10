import {Animated,Image, Pressable ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh , vw } from '../utils/dimension'

export default function Genre(props:any) {
  return (
    <Animated.View style={[styles.container,props.move]}>
      <Text style={styles.text}>{props.genre1}</Text>
      <Text style={styles.text} onPress={props.change2}>{props.genre2}</Text>
      <Pressable onPress={props.modalOpen} style={styles.catButton}>
      <Animated.View style={[props.moveCategory,{flexDirection:"row",alignItems:"center"}]}>
      <Text style={[styles.text]}>Categories</Text>
      <Image style={styles.arrowDown} source={require("../assets/arrow-down-white.png")}/>
      </Animated.View>
      </Pressable>
    </Animated.View>

  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        position:"absolute",
        width:vw(375),
        top:vh(85)
    },
    text:{
        fontSize:12,
        color:"white",
        fontFamily:"Montserrat-Medium"
    },
    catButton:{
      flexDirection:"row",
      alignItems:"center",justifyContent:"center"
    },
    arrowDown:{
      width:vw(12),
      height:vh(10),
      marginLeft:vw(4)
    }
})