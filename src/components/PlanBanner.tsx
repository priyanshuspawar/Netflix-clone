import {Pressable, Image ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimension'

const PlanBanner = (props:any) => {
    const [Active,setActive]=React.useState(false)
    return (
    <Pressable onPress={()=>{props.onPress()}}>
    <View  style={[styles.container,props.Active?{backgroundColor:"#E60A14"}:{backgroundColor:"#F06C70"}]}>
        <Text style={styles.plantext}>{props.planName}</Text>
    </View>
        {props.Active&&<Image  source={require("../assets/arrowdown.png")} style={styles.arrow}/>}
    </Pressable>
  )
}

export default PlanBanner

const styles = StyleSheet.create({
    container:{
        height:vh(60),
        width:vw(100),
        justifyContent:"center"
    

    },
    arrow:{
        width:vw(30),
        height:vh(16),
        alignSelf:"center"
    },
    plantext:{
        color:"#FFFFFF",
        fontFamily:"Montserrat-SemiBold",
        fontSize:12,
        width:vw(100),
        height:vh(22),
        textAlign:"center",
      
    }
})