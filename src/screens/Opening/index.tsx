import { StyleSheet, Text, View, ScrollView,Image,StatusBar} from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { fullheight, fullWidth, vh ,vw} from '../../utils/dimension'
import LinearGradient from 'react-native-linear-gradient'
import NavBar from './NavBar'
import JoinButton from './JoinButton'


export default function Opening(props:any) {

  const BgImage=[
    {id:1,img:require("../../assets/netflixmainbg.png"),blur:true,title:"Unlimited movies, TV shows, and more.",description:"Watch anywhere. Cancel anytime. Tap the link below to sign up."},
    {id:2,img:require("../../assets/netflixmainbg2.png"),blur:false,title:"Watch on any device",description:"Stream on your phone, tablet, laptop, and TV without paying more."},
    {id:3,img:require("../../assets/netflixmainbg3.png"),blur:false,title:"Download and go",description:"Save your data, watch offline on a plane, train, or submarine...."},
    {id:4,img:require("../../assets/netflixmainbg4.png"),blur:false,title:"No pesky contracts",description:"Join today, cancel anytime."},
  ]


  return (
    <View style={{flex:1,alignItems:"center"}}>
    <StatusBar backgroundColor={"transparent"} translucent={true}/>
    <NavBar screen={()=>{props.navigation.navigate("Details")}}/>
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      {BgImage.map((e,i)=>{
        return(
          <View style={styles.bgimage}>
            <Image source={e.img} style={styles.bgimage} resizeMethod={"resize"}/>    
            <LinearGradient colors={["#000000","#00000020","#00000099"]} style={[styles.grad,e.blur?{position:"absolute"}:{position:"relative"}]}>      
            </LinearGradient>
            <Text style={styles.imgtitle}>{e.title}</Text>
            <Text style={styles.imgdescription}>{e.description}</Text>
          </View>
        )


      })}
    </ScrollView>
    <JoinButton/>
    </View>
  )
}

const styles = StyleSheet.create({
  bgimage:{
    width:fullWidth,
    height:fullheight,
    backgroundColor:"black",
    alignItems:"center"
  },
  grad:{
    
    height:fullheight,
    width:fullWidth,
    position:"absolute",
   
  },
  imgtitle:{
    color:"white",
    fontFamily:"Montserrat-Bold",
    fontSize:30,
    textAlign:"center",
    position:"absolute",
    zIndex:1,
    bottom:vh(330),
    paddingHorizontal:vw(25)
  },
  imgdescription:{
    color:"white",
    fontFamily:"Montserrat-SemiBold",
    fontSize:18,
    textAlign:"center",
    position:"absolute",
    zIndex:1,
    bottom:vh(240),
    paddingHorizontal:vw(25)
  }
})