import { StyleSheet, Text, View, FlatList , Pressable, Image} from 'react-native'
import React from 'react'
import { BlurView } from "@react-native-community/blur";
import { categories } from '../utils/constants';
import { vh, vw } from '../utils/dimension';


const ModalView = (props:any) => {
    const renderitem=({item,index}:any)=>{
        return(
            <View style={{marginVertical:vh(22),height:vh(30)}}>
            <Text style={styles.textcolor}>{item.title}</Text>
            </View>
        )
    }
  return (
    <BlurView style={styles.modalContainer}>
      <FlatList data={categories} renderItem={renderitem} showsVerticalScrollIndicator={false}/>
        
        {/* <View style={styles.closeButtonContainer}>
        <Image source={require("../assets/cross_black.png")} style={styles.closeButton} resizeMode={"contain"}/>
        </View> */}
        
      
    </BlurView>
  )
}

export default ModalView

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor:"translucent",
        paddingTop:vh(50),
    },
    textcolor:{
        color:"#a6a6a6",
        textAlign:"center",
        fontFamily:"Montserrat-Medium",
        fontSize:17
    },
    closeButton:{
        height:vh(15),
        width:vw(16),

    },
    closeButtonContainer:{
        backgroundColor:"white",
        borderRadius:vh(20),
        width:vw(28),
        justifyContent:"center",
        height:vh(30),
        position:"absolute",
        alignItems:"center",
        alignSelf:"center"
    }
})