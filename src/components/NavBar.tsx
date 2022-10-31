import { Image, StyleSheet, Text, View, Pressable,ImageBackground,Animated} from 'react-native'
import React from 'react'
import { fullWidth, vh,vw} from '../utils/dimension'




export default function NavBar(props :any) {
  return (
    <View style={styles.grad} >
    <Animated.View style={[{backgroundColor:"#000000",opacity:props.Blur,flex:1}]}></Animated.View>
    <View style={styles.container}>
      <Image source={require("../assets/netflix_logo_bar.png")} style={styles.logo} resizeMode={"center"}/>
      <Pressable onPress={props.screen}>
      <Image source={require("../assets/searching.png")} style={styles.search} resizeMode={"contain"}/>
      </Pressable>
      <Image source={require("../assets/profile1.png")} style={styles.profilepic} resizeMode={"contain"}/>
    </View>
    </View>

 
  )
}

const styles = StyleSheet.create({
  grad:{
    width:fullWidth,position:"absolute",zIndex:1,top:vh(0),height:vh(80)
  },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"transparent",
        width:fullWidth,
        paddingHorizontal:10,
        alignItems:"center",marginTop:vh(40),position:"absolute"
    },
    logo:{
        height:vh(30),
        width:vw(25)
    },
    search:{
        height:vh(20),
        width:vw(20),
        marginLeft:250
    },
    profilepic:{
      height:vh(20),
      width:vw(20),
      marginRight:5
    }
})