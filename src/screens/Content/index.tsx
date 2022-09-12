import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { vh, vw } from '../../utils/dimension';

export default function Content(props:any) {
  return (
    <View>
      <Video source={{uri:"http://techslides.com/demos/sample-videos/small.mp4"}} style={{height:vh(100),width:vw(100)}}/>  
    </View>
  )
}

const styles = StyleSheet.create({})