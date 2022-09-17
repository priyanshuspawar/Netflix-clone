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
import {getGenreMovie, getTrailerCall} from '../../utils/services';
import PlayButton from '../../components/PlayButton';
import DownloadButton from '../../components/DownloadButton';
import Genre from '../../utils/getgenre';
import AgeRating from '../../components/AgeRating';
import { useDispatch } from 'react-redux';
import { Similar } from '../../Redux/action';
import ViewSimilarGrid from '../../components/ViewSimilarGrid';

export default function Content(props: any) {
  type trailerData = {key: string; type: string};
  const dispatch = useDispatch<any>();
  const {title,adult,overview, id, media_type, name,release_date,first_air_date} = props.route.params;
  const [trailerData, setTrailer] = React.useState<Array<trailerData>>([]);
  const [key, setKey] = React.useState('');
  const [animate, setAnimate] = React.useState(true);
  const [SimilarData,setSimilarData]=React.useState()
  const [genreMovie,setGenreMovie]=React.useState([]);

  React.useEffect(() => {
    // getGenreMovie("movie",(res)=>{setGenreMovie(res.data.genres)})
    getTrailerCall(
      id,
      media_type,
      res => {
        setTrailer(res.data.results);
      },
      () => {},
    );
    dispatch(Similar(id,media_type,(res:any)=>{setSimilarData(res)}))

  }, []);



  React.useEffect(()=>{
    trailerData.map(e => {
      if (e.type == 'Trailer' && key == '') {
        setKey(e.key);
        setAnimate(false);
      }
    });
  },[trailerData])


  
  
  console.log("@@@",SimilarData);
  

  return (
    <View style={styles.container}>
      <View style={styles.player} pointerEvents={"none"}>
        <StatusBar translucent={true} backgroundColor={"transparent"}/>
        {animate ? (
          <ActivityIndicator animating={true} size={'large'} color={'red'}  style={styles.loader}/>
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
      <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.title}>{media_type == 'tv' ? name : title}</Text>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.year}>{media_type == 'tv' ? first_air_date.slice(0,4) : release_date.slice(0,4)}</Text>
      <AgeRating rating={adult}/>
      </View>
      <PlayButton/>
      <DownloadButton/>
      <Text style={styles.dis}>{overview}</Text>
      <Text style={styles.similartext}>MORE LIKE THIS</Text>
      <ViewSimilarGrid data={SimilarData}/>
    </ScrollView>
    </View>
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
    fontSize: 23,
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
  loader:{
    alignSelf:"center",
    marginTop:100
  },
  year:{
    color:"#707070",
    fontFamily:"Montserrat-Bold",
    fontSize:12,
    textAlign:"center",
    paddingVertical:vh(2),
    marginRight:vh(6)
  },
  similartext:{
    fontFamily:"Montserrat-Bold",
    color:"white",
    fontSize:15,
    marginVertical:8,
  }
});
