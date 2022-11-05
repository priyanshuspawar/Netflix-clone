import { StyleSheet, Text, View , Image,Pressable} from 'react-native'
import React from 'react'
import { vw,vh, fullWidth } from '../utils/dimension'

const LikeShareBar = () => {
    const [Like, setLike] = React.useState(false)
  return (
    <View style={styles.container}>
        <Pressable style={styles.button}>
        <Image source={require("../assets/plus.png")} resizeMode={"center"} style={styles.image}/>
        <Text style={styles.text}>My List</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>setLike(!Like)}>
        <Image source={Like?require("../assets/like.png"):require("../assets/likenot.png")}  resizeMode={"contain"}  style={styles.image}/>
        <Text style={styles.text}>{Like?"Rated":"Rate"}</Text>
        </Pressable>

        
        <Pressable style={styles.button}>
        <Image source={require("../assets/share.png")}  resizeMode={"contain"} style={styles.image}/>
        <Text style={styles.text}>Share</Text>
        </Pressable>

    </View>
  )
}

export default LikeShareBar

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    marginVertical:vh(20),
    width:fullWidth,
    justifyContent:"space-around"
    },
    image:{
        width:vw(25),
        height:vh(30),
    },
    text:{
        color:"#b2b2b2",
        fontSize:11,
        textAlign:"center",
        marginTop:vh(4),
        fontFamily:"Montserrat-SemiBold"
    },button:{
        alignItems:"center",
        width:vw(45)
    }
})