import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import url from '../utils/constants'
import { vw, vh, fullWidth} from '../utils/dimension'
export default function Show(props:any) {
  return (

    <View>
        {/* <Text style={{color:"white",alignSelf:"center"}}>{props.title}</Text> */}
        <Image source={{uri:`${url}${props.img}`}} style={styles.poster} resizeMode={"stretch"}/>
        <View style={styles.buttons}>
          <View style={styles.add}>
            <Image source={require("../assets/plus.png")} style={styles.addimg} resizeMode={"contain"}/>
            <Text style={{color:"white",fontWeight:"400",fontSize:10}}>My List</Text>

          </View>
          <View style={styles.play}>
          <Image source={require("../assets/play.png")} style={styles.playimg} resizeMode={"contain"}/>
          <Text style={{color:"black",fontWeight:"600"}}>Play</Text>
          </View>
          <View style={styles.info}>
          <Image source={require("../assets/info.png")} style={styles.infoimg} resizeMode={"contain"}/>
          <Text style={{color:"white",fontWeight:"400",fontSize:10}}>info</Text>
          </View>
        </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
    poster:{
        width:vw(375),
        height:vh(500),

    },
    buttons:{
      flexDirection:"row",
      justifyContent:"space-around",
      position:"absolute",
      bottom:vh(20),
      width:fullWidth,
      backgroundColor:"transparent",
      elevation:50,
      shadowColor:"black",
      borderColor:"black"
    },
    add:{
      justifyContent:"center",
      alignItems:"center"
    },
    addimg:{
      height:vh(18),
      width:vw(12),
      marginBottom:2
    },
    info:{

    },
    infoimg:{
      height:vh(18),
      width:vw(18)
    },
    play:{
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:vw(70),
      height:vh(30),
      borderRadius:3
    },
    playimg:{
      height:vh(16),
      width:vw(16),
      marginRight:8
    }

})