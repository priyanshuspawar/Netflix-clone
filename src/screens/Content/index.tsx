import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {fullWidth, vh, vw} from '../../utils/dimension';
import WebView from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import {trailerUrl} from '../../utils/constants';
import endpoints from '../../utils/endpoints';
import {getTrailerCall} from '../../utils/services';

export default function Content(props: any) {
  type trailerData={key:string,type:string}
  const {title, overview, id,media_type,name} = props.route.params;
  const [trailerData, setTrailer] = React.useState<Array<trailerData>>([]);
  let flag=0;
  

  React.useEffect(() => {
    getTrailerCall(
      id,media_type,
      (res)=> {
        setTrailer(res.data.results);
      },
      () => {},
    );
  }, [title]);


  return (
    <View style={styles.container}>
      {/* <Video source={{uri:"https://youtu.be/Go8nTmfrQd8"}} style={styles.player} controls={true}/> */}
      {trailerData.map((e, i) => {
        if (e.type == 'Trailer' && flag==0) {
          flag=1;
          return (
            <View style={styles.player}>
              <YoutubePlayer
                height={vh(250)}
                videoId={e.key}
                play={true}
                initialPlayerParams={{
                  rel: false,
                  modestbranding: true,
                  iv_load_policy: 3,
                  controls:false,
                  loop:true
                }}
                // webViewStyle={{flex:0,height:vh(300)}}
                // webViewProps={{containerStyle:{height:vh(300)}}}
              />
            </View>
          );
        }
      })}
      <Text style={styles.title}>{media_type=="tv"?name:title}</Text>
      <Text style={styles.dis}>{overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    width: fullWidth,
    height:vh(250)
    // borderWidth:1,
    // borderColor:"white"
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title:{
    color:"white",
    fontSize:18,
    marginTop:5
  },
  dis:{
    color:"white",
    fontWeight:"400",
    marginTop:7,
    fontSize:14
  }
});
