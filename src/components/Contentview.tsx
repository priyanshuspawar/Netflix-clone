import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { vh, vw } from '../utils/dimension';
import Poster from './Poster';



export default function Contentview(props: any) {
  const renderItem = ({item, index}:any) => {
    // console.log("&&&&&&&&&",item);
    const {media_type,}=item

    return(
        <Poster item={item} style={props.style} title={media_type=="tv" || props.type=="Netflix"?"name":"title"} screen={()=>{props.screen(item)}}/>
        )   
  };
  return (
    <View style={[styles.container,props.styleContainer]}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList data={props.data} renderItem={renderItem} horizontal={true} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior={"always"} pagingEnabled/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  },
  text:{
    color:"white",
    fontSize:15,
    marginBottom:vh(0),
    fontFamily:"Montserrat-SemiBold"
  }
});
