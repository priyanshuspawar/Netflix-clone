import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { vh } from '../../utils/dimension';

export default function Account(props: any) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/profile1.png")} style={{marginBottom:vh(20)}}/>
      <Text
        style={{color: 'white'}}
        onPress={() => {
          props.navigation.reset({index: 0, routes: [{name: 'Details'}]});
        }}>
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
