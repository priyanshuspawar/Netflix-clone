import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import url from '../utils/constants';
import { vh, vw } from '../utils/dimension';
import Poster from './Poster';



export default function Contentview(props: any) {
  const renderItem = ({item, index}:any) => {
    // console.log("&&&&&&&&&",item);
    return(
        <Poster item={item} style={props.style} title={props.name} screen={props.screen}/>
        )   
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList data={props.data} renderItem={renderItem} horizontal={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginVertical:10
  },
  text:{
    color:"white",
    fontSize:20,
    fontWeight:"700",
    marginBottom:8
  }
});
