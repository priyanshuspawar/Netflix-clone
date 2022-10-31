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
  Pressable,Animated
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
import auth from '@react-native-firebase/auth';

type ActionMovie = {
  title: string;
  poster_path: String;
  backdrop_path: String;
  first_air_date: String;
};

export default function Home(props: any) {
  const UpValue=React.useState(new Animated.Value(0))[0]
  const Blur=React.useState(new Animated.Value(0))[0]
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
  const [ColorValue,SetColorValue]=React.useState<any>(0)

  const MoveGenreDown=()=>{
    Animated.spring(UpValue,{
      toValue:20,
      useNativeDriver:true
    
    }).start()
  }
  const MoveGenreUp=()=>{
    Animated.timing(UpValue,{
      toValue:0,
      duration:200,
      useNativeDriver:true
    }).start()
  }

  const OnScrollupBlur=()=>{
    console.log("hello");
    Animated.timing(Blur,{
      toValue:0.2,
      duration:500,
      useNativeDriver:false
    }).start()
  }

  const ScrollHandler=({nativeEvent}:any)=>{
    if(nativeEvent.velocity.y>0){
      
      if(nativeEvent.contentOffset.y<vh(150)){
        MoveGenreDown()
      }
      OnScrollupBlur()
      console.log("Up swipe",nativeEvent.velocity,nativeEvent.contentOffset);
      
    }
    else if(nativeEvent.velocity.y<0){
      if(nativeEvent.contentOffset.y<vh(100)){
      MoveGenreUp()}
      console.log("down swipe");
      
    
  }
  }



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
        // console.log(auth().currentUser)
    

  }, []);
  // console.log(trending[1]?.poster_path);

  

  return (
    <Animated.View style={{backgroundColor: '#000000', flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
    <NavBar Blur={Blur} screen={()=>{props.navigation.navigate("Search")}}/>
    <ScrollView scrollEventThrottle={1}  showsVerticalScrollIndicator={false} onScroll={(event)=>{ScrollHandler(event)}}>

      {animate && (
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={'red'}
          style={styles.loader}
        />
      )}
      
      <Show img={trending[2]?.poster_path} title={trending[1]?.title} screen={()=>{props.navigation.navigate("Content",trending[1])}}/>
      <Genre genre1={'TV Shows'} move={{transform:[{translateY:UpValue}]}} genre2={'Movies'} modalOpen={()=>{setModalVisible(true)}}/>
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
      
        <Image source={require("../../assets/cross_black.png")} style={styles.closeButton} resizeMode={"center"}/>
    
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
        style={{height: vh(225),marginRight:vw(10),width: vw(140)}}
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    alignSelf: 'center',
    flex: 1,
  },
  closeButton:{
    height:vh(10),
    width:vw(10),

},
closeButtonContainer:{
  backgroundColor:"white",
  borderRadius:vh(30),
  width:vw(42),
  justifyContent:"center",
  height:vh(42),
  position:"absolute",
  alignItems:"center",
  top:vh(700),
  alignSelf:"center"
}

});
