import { StyleSheet, Text, View, ScrollView,Image,StatusBar} from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { fullheight, fullWidth, vh ,vw} from '../../utils/dimension'
import LinearGradient from 'react-native-linear-gradient'
import NavBar from './NavBar'
import JoinButton from './JoinButton'


export default function Opening(props:any) {
  const [Active,SetActive]=React.useState(0);
  const BgImage=[
    {key:1,img:require("../../assets/netflixmainbg.png"),blur:true,title:"Unlimited movies, TV shows, and more.",description:"Watch anywhere. Cancel anytime. Tap the link below to sign up."},
    {key:2,img:require("../../assets/netflixmainbg2.png"),blur:false,title:"Watch on any device",description:"Stream on your phone, tablet, laptop, and TV without paying more."},
    {key:3,img:require("../../assets/netflixmainbg3.png"),blur:false,title:"Download and go",description:"Save your data, watch offline on a plane, train, or submarine...."},
    {key:4,img:require("../../assets/netflixmainbg4.png"),blur:false,title:"No pesky contracts",description:"Join today, cancel anytime."},
  ];
  const onScroll=({nativeEvent}:any)=>{
    const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
    if (slide!=Active){
      SetActive(slide)
    }
  }

  return (
    <View style={{flex:1,alignItems:"center"}}>
    <View>
      <StatusBar translucent={true} backgroundColor={"transparent"}/>
    </View>
    <NavBar screen={()=>{props.navigation.navigate("Details")}} change={()=>{}} styletext1={{color:"#FFFFFF"}} styletext2={{color:"#FFFFFF"}}/>
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={(event)=>{onScroll(event)}}>
      {BgImage.map((e,i)=>{
        return(
          <View style={[styles.bgimage]} key={e.key}>
            <Image source={e.img} style={[styles.bgimage,{height:fullheight}]} resizeMethod={"resize"}/>    
            <LinearGradient colors={["#000000","#00000020","#00000099"]} style={[styles.grad,e.blur?{position:"absolute"}:{position:"relative"}]}>      
            </LinearGradient>
            <Text style={styles.imgtitle}>{e.title}</Text>
            <Text style={styles.imgdescription}>{e.description}</Text>
          </View>
        )


      })}
    </ScrollView>
    <View style={styles.dotContainer}>
    {BgImage.map((e,i)=>{
      return(
        <View key={e.key} style={[styles.dotStyle,Active==i?{backgroundColor:"#F40612"}:{backgroundColor:"#FFFFFF90"}]}></View>
      )
    })}
    </View>
    <JoinButton onPress={()=>{props.navigation.navigate("SignUp")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bgimage:{
    width:fullWidth,
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
  },
  dotContainer:{
    flexDirection:"row",
    position:"absolute",
    bottom:vh(110),

  },
  dotStyle:{
    height:vh(9),
    width:vw(8),
    margin:vw(3),
    borderRadius:vh(35)
  },
})