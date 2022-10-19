import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { vw , vh} from '../../utils/dimension'

const JoinButton = (props:any) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
    
      <Text style={styles.text}>netflix.com/join</Text>
    
    </Pressable>
  )
}

export default JoinButton

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#F40612",
        width:vw(350),
        height:vh(45),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:vh(2),
        position:"absolute",
        bottom:vh(50)
    },
    text:{
        color:"white",
        fontFamily:"Montserrat-SemiBold",
        fontSize:16
    }
})