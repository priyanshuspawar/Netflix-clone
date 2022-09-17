import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fullWidth, vh, vw } from '../utils/dimension'

const PlayButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/play.png")} style={styles.img} resizeMode={"center"}/>
      <Text style={styles.text}>Play</Text>
    </View>
  )
}

export default PlayButton

const styles = StyleSheet.create({
    container:{
        width:fullWidth,
        height:vh(35),
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:10,
        alignSelf:"center",
        marginVertical:10
    },
    img:{
        height:vh(21),
        width:vw(23),
        marginRight:2
    },
    text:{
        color:"black",
        fontFamily:"Montserrat-Bold"
    }
})