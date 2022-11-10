import { StyleSheet, Text, View, ScrollView ,ActivityIndicator,Animated } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import NavBar from '../../components/NavBar';
import Genre from '../../components/Genre';
import { useDispatch } from 'react-redux';
import { Netflix_Movies, SciFiMovies, HorrorMovies, RomanceMov, ThrillerMov } from '../../Redux/action';
import { vh, vw } from '../../utils/dimension';
import Show from '../../components/Show';
import Contentview from '../../components/Contentview';
const MovieCategoryScreen = (props:any) => {
    type ActionMovie = {
        title: string;
        poster_path: String;
        backdrop_path: String;
        first_air_date: String;
      };


    const UpValue=React.useState(new Animated.Value(0))[0]
    const Blur=React.useRef(new Animated.Value(0)).current;
    const moveCategory=React.useRef(new Animated.Value(0)).current;
    const dispatch=useDispatch<any>();
    const [Loading , setLoading]=React.useState(true)
    const [MoviesNetflx,setMoviesNetflix]=React.useState<Array<ActionMovie>>([]);
    const [SciFiMoviesData,setSciFiMoviesData]=React.useState<Array<ActionMovie>>([])
    const [HorrorMoviesData,setHorrorMoviesData]=React.useState<Array<ActionMovie>>([])
    const [ThrillerMovieData,setThrillerMovieData]=React.useState<Array<ActionMovie>>([])

    Animated.timing(moveCategory,{
        toValue:vw(-110),
        duration:1200,
        useNativeDriver:true
    }
    ).start()

    React.useEffect(()=>{
        dispatch(Netflix_Movies((response: []) => {
            setMoviesNetflix(response);}))
        setLoading(false)
        dispatch(SciFiMovies((response:[])=>{
            setSciFiMoviesData(response)
            }))
        dispatch(ThrillerMov((response:[])=>{
            setThrillerMovieData(response)
        }))
        return(()=>{})
        
    },[])
  
    return (
    <ScrollView style={styles.container} bouncesZoom={false} bounces={false} overScrollMode={"never"}>
        <SharedElement style={{position:"absolute",zIndex:1000,top:0,left:0}} id='searchBar'>
            <NavBar Blur={Blur} screen={()=>{props.navigation.navigate("Search")}}/>
        </SharedElement>
        <SharedElement id='category' style={{position:"absolute",zIndex:800,left:0,top:0}}>
        <Genre genre1={'Movies'} change2={()=>{}} move={{transform:[{translateY:UpValue}],justifyContent:"space-around"}} moveCategory={{transform:[{translateX:moveCategory}]}} modalOpen={()=>{}}/>
        </SharedElement>
       {Loading? <ActivityIndicator animating={true} size={'large'} color={"red"} style={{alignSelf:"center",marginTop:vh(350)}}/>:
       <>
       <Show img={MoviesNetflx[0]?.poster_path} title={MoviesNetflx[0]?.title} screen={()=>{props.navigation.navigate("Content",MoviesNetflx[2])}}/>
       <Contentview
       data={MoviesNetflx}
       title={"Only on Netlfix"}
       />
       <Contentview
       data={SciFiMoviesData}
       title={"Sci-Fi"}
       />
       <Contentview
       data={ThrillerMovieData}
       title={"Thriller"}
       />
       </>
       }
    </ScrollView>
  )
}


MovieCategoryScreen.SharedElement=()=>{
    return("Category")
}

export default MovieCategoryScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000000",
    }
})