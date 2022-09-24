import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import { vh , vw} from './dimension'
import { SimilarPosterUrl } from '../utils/constants';
import FastImage from 'react-native-fast-image';


const SimilarPoster = (props:any) => {

    
  return (
    <Pressable onPress={props.screen}>
    <View style={{borderRadius:4,alignItems:"center",justifyContent:"center",marginRight:8,marginBottom:8,height:vh(170),width:vw(113)}}>
    <Text style={{color:"white",fontSize:8,textAlign:"center"}}>{props.item.title}</Text>
    <FastImage source={{uri:`${SimilarPosterUrl}${props.item.poster_path}`,headers: { Authorization: 'someAuthToken' },priority: FastImage.priority.high}} style={{borderRadius:4,height:vh(170),width:vw(113),position:"absolute"}}/>
    </View>
    </Pressable>
)
  
}

export default SimilarPoster

const styles = StyleSheet.create({})