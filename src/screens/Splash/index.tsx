import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {vh, fullWidth, vw} from '../../utils/dimension';

const Splash = (props: any) => {
  React.useEffect(() => {
    setTimeout(() => props.navigation.replace('Details'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/netflix_start.jpeg')}
        style={styles.logo}
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
