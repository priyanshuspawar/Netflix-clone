import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import endpoints from '../../utils/endpoints';
import {
  MovieAction,
  NetflixOriginals,
  TopRated,
  Trending,
} from '../../Redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {getApiCall} from '../../utils/services';
import Contentview from '../../components/Contentview';
import Categorytxt from '../../components/Categorytxt';
import Show from '../../components/Show';
import Poster from '../../components/Poster';
import { SafeAreaView } from 'react-native-safe-area-context';
import Genre from '../../components/Genre';
import { vh } from '../../utils/dimension';
import { vw } from '../../components/dimension';

export default function Home() {
  const [animate, setAnimate] = React.useState(true);
  const [action_movies, setActionMovie] = React.useState<Array<{title: string,poster_path:String,backdrop_path:String,first_air_date:String}>>([]);
  const [trending, setTrending] = React.useState<Array<{title: string,poster_path:String,backdrop_path:String,first_air_date:String}>>([]);
  const [topRated, setTopRated] = React.useState<Array<{title: string,poster_path:String,backdrop_path:String,first_air_date:String}>>([]);
  const [netflixOriginals, setNetflixOriginals] = React.useState<Array<{name: string,poster_path:String,backdrop_path:String,first_air_date:String}>>([]);
  const dispatch = useDispatch<any>();
  

  React.useEffect(() => {
    dispatch(
      MovieAction((response: []) => {
        setActionMovie(response);
        dispatch(
          Trending((response: []) => {
            setTrending(response);
          }),
        );
        dispatch(
          NetflixOriginals((response: []) => {
            setNetflixOriginals(response);
          }),
        );
        dispatch(
          TopRated((response: []) => {
            setTopRated(response);
          }),
        )
        setAnimate(false);
      }),
    );
  }, []);
  // console.log(trending[1]?.poster_path);
  

  return (
       
    <ScrollView style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar  translucent={true} backgroundColor={"transparent"}/>
      {/* <View style={styles.container}>`` */}
        {animate && <ActivityIndicator animating={true} size={'large'} color={'red'} style={styles.loader}/>}
        <Show img={trending[17]?.poster_path} title={trending[17]?.title}/>
        <Genre genre1={"TV Shows"} genre2={"Movies"}/>
        <Contentview data={trending} title={'Trending'} name={"name"}/>
        <Contentview data={topRated} title={'Top Rated'} name={"title"}/>
        <Contentview data={netflixOriginals} title={'Netflix Originals'} style={{height:vh(325),width:vw(160)}} name={"name"}/>
        <Contentview data={action_movies} title={'Action Movies'} name={"title"}/>
      {/* </View> */}
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    alignSelf: 'center',
    borderColor: 'white',
    flex:1
  },
});
