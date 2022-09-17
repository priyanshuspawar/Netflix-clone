import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {fullWidth, vh, vw} from '../../utils/dimension';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getTrailerCall} from '../../utils/services';
import PlayButton from '../../components/PlayButton';
import DownloadButton from '../../components/DownloadButton';

export default function Content(props: any) {
  type trailerData = {key: string; type: string};
  const {title, overview, id, media_type, name} = props.route.params;
  const [trailerData, setTrailer] = React.useState<Array<trailerData>>([]);
  const [key, setKey] = React.useState('');
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    getTrailerCall(
      id,
      media_type,
      res => {
        setTrailer(res.data.results);
      },
      () => {},
    );
    trailerData.map(e => {
      if (e.type == 'Trailer' && key == '') {
        setKey(e.key);
        setAnimate(false);
      }
    });
  }, [title, trailerData]);

  console.log(key);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.player}>
        <StatusBar translucent={true} backgroundColor={"transparent"}/>
        {animate ? (
          <ActivityIndicator animating={true} size={'large'} color={'red'} />
        ) : (
          <YoutubePlayer
            height={vh(250)}
            videoId={key}
            play={true}
            initialPlayerParams={{
              rel: false,
              modestbranding: true,
              iv_load_policy: 3,
              controls: false,
              loop: true,
            }}
            // webViewStyle={{flex:0,height:vh(300)}}
            // webViewProps={{containerStyle:{height:vh(300)}}}
          />
        )}
      </View>
      <Text style={styles.title}>{media_type == 'tv' ? name : title}</Text>
      <PlayButton/>
      <DownloadButton/>
      <Text style={styles.dis}>{overview}</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  player: {
    width: fullWidth,
    height: vh(250),
    // borderWidth:1,
    // borderColor:"white"
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:8
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    fontFamily:"Montserrat-ExtraBold"
  },
  dis: {
    color: 'white',
    marginTop: 7,
    fontSize: 12,
    fontFamily:"Montserrat-Medium",
    textAlign:"left"
  },
});
