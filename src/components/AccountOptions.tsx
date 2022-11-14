import { StyleSheet, Text, View, Pressable, Image} from 'react-native'
import React from 'react'
import { vh,vw } from '../utils/dimension'

const AccountOptions = (props:any) => {
  return (
    <View style={styles.container}>
        <Image source={props.imageSource} style={styles.icon} resizeMode={"contain"}/>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default AccountOptions

const styles = StyleSheet.create({
    container:{
        height:vh(60),
        backgroundColor:"#121212",
        flexDirection:"row"
    },
    icon:{
      width:vw(30),
      height:vh(30),
      marginLeft:vw(10),
      alignSelf:"center",
      marginRight:vw(12),
    },
    title:{
      color:"#FFFFFF",
      textAlign:"center",
      alignSelf:"center",
      fontFamily:"Montserrat-SemiBold"
    }
})