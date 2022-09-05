import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import url from '../utils/constants'
import { vh, vw } from '../utils/dimension'

export default function Poster(props:any) {
    // console.log("###",props.item.poster_path);
  
    
  return (
    <Pressable onPress={()=>{}}>
    <View style={[styles.container,props.style]}>
    <Text style={styles.title}>{props.item[props.title]}</Text>
    <Image source={{uri:`${url}${props.item.poster_path}`}} style={[styles.poster,props.style]}/>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    poster:{
        height:vh(200),
        width:vw(125),
        borderWidth:1,
        position:"absolute",
        borderRadius:vw(6)
    },
    container:{
        height:vh(200),
        width:vw(125),
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
    },
    title:{
      color:"white",
      textAlign:"center"
    }
})