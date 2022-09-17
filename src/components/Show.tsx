import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {posterUrl} from '../utils/constants';
import {vw, vh, fullWidth} from '../utils/dimension';
import LinearGradient from 'react-native-linear-gradient';
export default function Show(props: any) {
  return (
    <View>
      <Image
        source={{uri: `${posterUrl}${props.img}`}}
        style={styles.poster}
        resizeMode={'stretch'}
      />
      <LinearGradient colors={["#000000","#00000000","#000000"]} style={styles.grad}>
      </LinearGradient>
      {/* <Text style={{color:"white",alignSelf:"center"}}>{props.title}</Text> */}
      <View style={styles.buttons}>
        <View style={styles.add}>
          <Image
            style={styles.addimg}
            source={require('../assets/plus.png')}
            resizeMode={'contain'}
          />
          <Text style={{color: 'white', fontWeight: '400', fontSize: 9}}>
            My List
          </Text>
        </View>
        <View style={styles.play}>
          <Image
            source={require('../assets/play.png')}
            style={styles.playimg}
            resizeMode={'contain'}
          />
          <Text style={{color: 'black', fontWeight: '600'}}>Play</Text>
        </View>
        <View style={styles.info}>
          <Image
            source={require('../assets/info.png')}
            style={styles.infoimg}
            resizeMode={'center'}
          />
          <Text style={{color: 'white', fontWeight: '400', fontSize: 11}}>
            info
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: fullWidth,
    height: vh(525),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: vh(5),
    width: fullWidth,
    backgroundColor: 'transparent',
    elevation: 50,
    shadowColor: 'black',
    borderColor: 'black',
    alignContent:"center"
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addimg: {
    height: vh(17),
    width: vw(11),
    marginBottom: 0,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoimg: {
    height: vh(18),
    width: vw(18),
  },
  play: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: vw(70),
    height: vh(30),
    borderRadius: 3,
  },
  playimg: {
    height: vh(16),
    width: vw(16),
    marginRight: 8,
  },
  grad:{
  position:"absolute",
  height:vh(550),
  width:fullWidth
}
});
