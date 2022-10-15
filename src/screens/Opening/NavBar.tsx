import {TouchableOpacity ,Image ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fullWidth,vh } from '../../components/dimension'
import { vw } from '../../utils/dimension'

const NavBar = (props:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image source={require("../../assets/Netflixlogo.png")} style={styles.img} resizeMethod={"auto"}/>
      </TouchableOpacity>
      <Text style={styles.text1}> Privacy </Text>
      <Text style={styles.text2} onPress={props.screen}> Sign In </Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"transparent",
        width:fullWidth,
        height:vh(50),
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:vh(25),
        position:"absolute",
        zIndex:1,
        paddingHorizontal:vw(5)
    },
    img:{
        height:vh(35),
        width:vw(110),
        backgroundColor:"transparent"
    },
    text2:{
        fontFamily:"Montserrat-Medium",
        color:"white",
        fontSize:15,
        marginRight:vw(4)
    },
    text1:{
        fontFamily:"Montserrat-Regular",
        color:"#FFFFFA",
        fontSize:15,
        marginRight:vw(4),marginLeft:vw(120)
    }
})