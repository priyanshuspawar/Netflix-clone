import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimension'

const VideoBar = (props:any) => {
  return (
    <View style={styles.container}>
    <Pressable onPress={props.screen} style={styles.crossButton}>
      <Image source={require("../assets/cross.png")} resizeMode={"contain"} style={styles.crossImg}/>
    </Pressable>
    </View>
  )
}

export default VideoBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    crossButton:{
        width:vw(21),
        height:vh(23),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:vw(30),
        backgroundColor:"#303030",
        position:"absolute",
        zIndex:1,
        top:vh(35),
        left:vw(326)
    },
    crossImg:{
        width:vw(16),
        height:vh(16)
    }
})