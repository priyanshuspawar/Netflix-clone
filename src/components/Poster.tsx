import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {url} from '../utils/constants';
import {vh, vw} from '../utils/dimension';
import FastImage from 'react-native-fast-image';

export default function Poster(props: any) {
  // console.log("###",props.item.poster_path);
  return (
    <Pressable onPress={props.screen}>
      <View style={[styles.container, props.style]}>
        <Text style={styles.title}>{props.item[props.title]}</Text>
        <FastImage
          resizeMode={'contain'}
          source={{
            uri: `${url}${props.item.poster_path}`,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          style={[styles.poster, props.style]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  poster: {
    height: vh(175),
    width: vw(120),
    borderWidth: 1,
    position: 'absolute',
    borderRadius: vw(6),
  },
  container: {
    height: vh(200),
    width: vw(125),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vw(5),
    borderRadius: vh(5),
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
});
