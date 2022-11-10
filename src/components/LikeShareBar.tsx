import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {vw, vh, fullWidth} from '../utils/dimension';
import firestore from '@react-native-firebase/firestore';

const LikeShareBar = (props: any) => {
  const [Like, setLike] = React.useState(false);
  const uid = props.uid;
  const [EmptyList, SetEmptyList] = React.useState(true);
  const docid = props.docid;

  React.useEffect(() => {
    firestore()
      .collection('Users')
      .doc(uid)
      .collection('my_list')
      .doc(docid)
      .get()
      .then(data => SetEmptyList(!data.exists))
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.addtolist();
          SetEmptyList(false)
        }}>
        <Image
          source={
            EmptyList
              ? require('../assets/plus.png')
              : require('../assets/check.png')
          }
          resizeMode={'center'}
          style={styles.image}
        />
        <Text style={styles.text}>{EmptyList ? 'My List' : 'Added'}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => setLike(!Like)}>
        <Image
          source={
            Like
              ? require('../assets/like.png')
              : require('../assets/likenot.png')
          }
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.text}>{Like ? 'Rated' : 'Rate'}</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image
          source={require('../assets/share.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.text}>Share</Text>
      </Pressable>
    </View>
  );
};

export default LikeShareBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: vh(20),
    width: fullWidth,
    justifyContent: 'space-around',
  },
  image: {
    width: vw(25),
    height: vh(30),
  },
  text: {
    color: '#b2b2b2',
    fontSize: 11,
    textAlign: 'center',
    marginTop: vh(4),
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    alignItems: 'center',
    width: vw(45),
  },
});
