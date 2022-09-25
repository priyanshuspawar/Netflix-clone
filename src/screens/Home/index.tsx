import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Modal,
  Image,
  Pressable
} from 'react-native';
import React from 'react';
import {
  MovieAction,
  NetflixOriginals,
  TopRated,
  Trending,
} from '../../Redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Contentview from '../../components/Contentview';
import Show from '../../components/Show';
import Poster from '../../components/Poster';
import {SafeAreaView} from 'react-native-safe-area-context';
import Genre from '../../components/Genre';
import {vh} from '../../utils/dimension';
import {vw} from '../../components/dimension';
import NavBar from '../../components/NavBar';
import ModalView from '../../components/ModalView';

type ActionMovie = {
  title: string;
  poster_path: String;
  backdrop_path: String;
  first_air_date: String;
};

export default function Home(props: any) {
  const [animate, setAnimate] = React.useState(true);
  const [action_movies, setActionMovie] = React.useState<Array<ActionMovie>>(
    [],
  );
  const [trending, setTrending] = React.useState<Array<ActionMovie>>([]);
  const [topRated, setTopRated] = React.useState<Array<ActionMovie>>([]);
  const [netflixOriginals, setNetflixOriginals] = React.useState<
    Array<ActionMovie>
  >([]);
  const dispatch = useDispatch<any>();
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {

    dispatch(MovieAction((response: []) => {
      setActionMovie(response);}))
    dispatch(Trending((response: []) => {
        setTrending(response);}))
    dispatch(NetflixOriginals((response: []) => {
        setNetflixOriginals(response);}))
    dispatch(TopRated((response: []) => {
          setTopRated(response);
          setAnimate(false);
        
        
        }))
    

  }, []);
  // console.log(trending[1]?.poster_path);


  return (
    <ScrollView style={{backgroundColor: 'black', flex: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <NavBar      
      screen={()=>{props.navigation.navigate("Search")}}
      />
      {animate && (
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={'red'}
          style={styles.loader}
        />
      )}
      
      <Show img={trending[1]?.poster_path} title={trending[1]?.title} screen={()=>{props.navigation.navigate("Content",trending[1])}}/>
      <Genre genre1={'TV Shows'} genre2={'Movies'} modalOpen={()=>{setModalVisible(true)}}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        // setModalVisible(!modalVisible);
        // }}
      
      >
      <View style={{flex:1}}>
        <ModalView/>
        <Pressable style={styles.closeButtonContainer} onPress={()=>{setModalVisible(false)}}>
      
        <Image source={require("../../assets/cross_black.png")} style={styles.closeButton} resizeMode={"contain"}/>
    
        </Pressable>
      </View>
      </Modal>
      <View style={{padding:5}}>
      <Contentview
        data={trending}
        title={'Trending'}
        screen={(e:any)=>{props.navigation.navigate("Content",e)}}
        styleContainer={{marginTop:20}}
      />
      <Contentview data={topRated} title={'Top Rated'} screen={(e:any)=>{props.navigation.navigate("Content",e)}}/>
      <Contentview
        data={netflixOriginals}
        title={'Netflix Originals'}
        style={{height: vh(325), width: vw(160)}}
        type={"Netflix"}
        screen={(e:any)=>{
          e.media_type="tv"
          props.navigation.navigate("Content",e)
        }}
      />
      <Contentview
        data={action_movies}
        title={'Action Movies'}
        screen={(e:any)=>{props.navigation.navigate("Content",e)}}
      />
      </View>
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
    flex: 1,
  },
  closeButton:{
    height:vh(15),
    width:vw(16),

},
closeButtonContainer:{
  backgroundColor:"white",
  borderRadius:vh(20),
  width:vw(28),
  justifyContent:"center",
  height:vh(30),
  position:"absolute",
  alignItems:"center",
  top:vh(700),
  alignSelf:"center"
}

});
