import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { fullWidth,vh,vw } from '../utils/dimension'


const DownloadButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/down.png")} style={styles.img} resizeMode={"center"}/>
      <Text style={styles.text}>Download</Text>
    </View>
  )
}

export default DownloadButton

const styles = StyleSheet.create({
    container:{
        width:fullWidth,
        height:vh(35),
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#303030",
        alignItems:"center",
        borderRadius:10,
        alignSelf:"center"
    },
    img:{
        height:vh(21),
        width:vw(23),
        marginRight:5
    },
    text:{
        color:"white",
        fontFamily:"Montserrat-Bold"
    }
})