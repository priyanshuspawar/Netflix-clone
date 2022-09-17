import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vw } from './dimension';
import { SimilarPosterUrl } from '../utils/constants';

const ViewSimilarGrid = (props:any) => {
    const renderitem=({item,index}:any)=>{
        return(
            <View style={{borderRadius:4,alignItems:"center",justifyContent:"center",marginRight:8,marginBottom:8,height:vh(170),width:vw(113)}}>
                <Text style={{color:"white",fontSize:8,textAlign:"center"}}>{item.title}</Text>
                <Image source={{uri:`${SimilarPosterUrl}${item.poster_path}`}} style={{borderRadius:4,height:vh(170),width:vw(113),position:"absolute"}}/>
            </View>
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