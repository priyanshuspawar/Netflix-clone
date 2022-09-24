import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vw } from './dimension';
import { SimilarPosterUrl } from '../utils/constants';
import SimilarPoster from './SimilarPoster';

const ViewSimilarGrid = (props:any) => {
    const renderitem=({item,index}:any)=>{
        return(
          <SimilarPoster item={item} screen={()=>{props.screen(item)}}/>  
        )          
    }
  return (
    <View style={{justifyContent:"center",alignContent:"center",marginVertical:10}}>
      <FlatList nestedScrollEnabled={true} data={props.data} numColumns={3} renderItem={renderitem}/>
    </View>
  )
}

export default ViewSimilarGrid

const styles = StyleSheet.create({})