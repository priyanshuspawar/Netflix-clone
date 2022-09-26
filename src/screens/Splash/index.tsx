import {StyleSheet, Image, Text, View, Animated} from 'react-native';
import React, { useRef } from 'react';
import FastImage from 'react-native-fast-image';
import {vh, fullWidth, vw} from '../../utils/dimension';
import {useSelector} from 'react-redux';

const Splash = (props: any) => {
  const {email} = useSelector((state: any) => state.UserAuthReducer);
const fade = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fade,{
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start()

    setTimeout(() => {
      email == ''
        ? props.navigation.replace('Details')
        : props.navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/netflix_start.jpeg')}
        style={[styles.logo,{transform:[{scale:fade}]}]}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    width: vw(fullWidth),
    height: vh(350),
  },
});
