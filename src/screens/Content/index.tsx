import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import Video from 'react-native-video';
import {fullWidth, vh, vw} from '../../utils/dimension';
import YoutubePlayer , {YoutubeIframeRef} from 'react-native-youtube-iframe';
import {getGenreMovie, getTrailerCall} from '../../utils/services';
import PlayButton from '../../components/PlayButton';
import DownloadButton from '../../components/DownloadButton';
import Genre from '../../utils/getgenre';
import AgeRating from '../../components/AgeRating';
import { useDispatch } from 'react-redux';
import { Similar } from '../../Redux/action';
import ViewSimilarGrid from '../../components/ViewSimilarGrid';
import Slider from '@react-native-community/slider';
import VideoBar from '../../components/VideoBar';

export default function Content(props: any) {
  type trailerData = {key: string; type: string};
  const playerRef=React.useRef<YoutubeIframeRef>(null);
  const dispatch = useDispatch<any>();
  const {title,adult,overview, id,name,release_date,first_air_date,media_type} = props.route.params;
  const [trailerData, setTrailer] = React.useState<Array<trailerData>>([]);
  const [key, setKey] = React.useState('');
  const [animate, setAnimate] = React.useState(true);
  const [SimilarData,setSimilarData]=React.useState();
  const [play,setPlay]=React.useState(false);
  const plaList=[]

  React.useEffect(() => {
    // getGenreMovie("movie",(res)=>{setGenreMovie(res.data.genres)})
    
    getTrailerCall(
      id,
      media_type == 'tv' || first_air_date !=undefined ?"tv":"movie",
      res => {
        setTrailer(res.data.results);
        
      },
      () => {},
    );
    dispatch(Similar(id,media_type == 'tv' || first_air_date !=undefined ?"tv":"movie",(res:any)=>{setSimilarData(res)}))
    

  }, [props.route.params]);




  React.useEffect(()=>{
    trailerData.map(e => {
      if (e.type == 'Trailer' && key == '') {
        setKey(e.key);
        setAnimate(false);
      }
      else{
        plaList.push(e.key)
      }
    });


    
  },[trailerData])


  
  // console.log("@@@",props.route.params);


  return (
    <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={"transparent"}/>
        <VideoBar screen={()=>{props.navigation.pop()}}/>
      <View style={styles.player}>
        {animate ? (
          <ActivityIndicator animating={true} size={'large'} color={'red'}  style={styles.loader}/>
        ) : (
          <YoutubePlayer
            ref={playerRef}
            height={vh(250)}
            videoId={key}
            play={play}
            initialPlayerParams={{
              rel: false,
              modestbranding: true,
              iv_load_policy: 3,
              // controls: false,
              loop: false,
              preventFullScreen:true
              
            }}
            onChangeState={(event)=>{}}
          
            // webViewStyle={{flex:0,height:vh(300)}}
            // webViewProps={{containerStyle:{height:vh(300)}}}
          />
        )}
        
      </View>
      {/* <Slider maximumValue={duration} thumbTintColor={"red"} value={currentTime} minimumValue={0} style={styles.slider} maximumTrackTintColor={"black"} minimumTrackTintColor={"red"}/> */}
      <ScrollView style={styles.scrollContainer} nestedScrollEnabled={true}>
      <Text style={styles.title}>{media_type == 'tv' || first_air_date !=undefined ? name : title}</Text>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.year}>{media_type == 'tv' || first_air_date !=undefined ? first_air_date?.slice(0,4) : release_date?.slice(0,4)}</Text>
      <AgeRating rating={adult}/>
      </View>
      <PlayButton play={()=>{setPlay(true)}}/>
      <DownloadButton/>
      <Text style={styles.dis}>{overview}</Text>
      <Text style={styles.similartext}>MORE LIKE THIS</Text>
      <ViewSimilarGrid data={SimilarData} screen={(e:any)=>{
          props.navigation.replace("Content",e )
        }}/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    width: fullWidth,
    height: vh(240),
    alignContent:"center",
    padding:vw(8),
    marginTop:vh(5)
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 23,
    marginTop: 2,
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
  },
  slider:{
    width:fullWidth,
    borderWidth:1,
    borderColor:"white",
    height:vh(30),
    paddingRight:vw(200)
  },
  scrollContainer:{
    padding:vw(8)
  }
});
