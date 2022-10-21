import {Image ,Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fullWidth, vh, vw } from '../utils/dimension'
const NavrBarSignIn = (props:any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.change}>
      <Image source={require("../assets/angle-left.png")} style={styles.Backbutton}/>
      </Pressable>
      <Image  source={require("../assets/Netflixlogo.png")} style={styles.logo}/>
    </View>
  )
}

export default NavrBarSignIn

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        height:vh(80),
        color:"#000000",
        position:"absolute",
        top:0,
        backgroundColor:"#000000",
        width:fullWidth,
        paddingHorizontal:vw(10),
        paddingTop:vh(50),
        
        
    },
    logo:{
        width:vw(140),
        height:vh(50)
    },
    Backbutton:{
        width:vw(35),
        height:vh(18)
    }
})