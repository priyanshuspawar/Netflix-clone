import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Pressable
} from 'react-native';
import React from 'react';
import {fullWidth, vh, vw} from '../../utils/dimension';
import {getSearch} from '../../utils/services';
import ViewSimilarGrid from '../../components/ViewSimilarGrid';
import { useSelector } from 'react-redux';

const Search = (props: any) => {
  const [data, SetData] = React.useState();
  const [text, setText] = React.useState<string>("");
  const [animate, setAnimate] = React.useState(false);
  const inputRef=React.useRef<any>(null);
  const {Trending} = useSelector((state: any) => state.MovieDataReducer);


  const SetDataStart=()=>{
    const newData=Trending.map((e:any,i:Number)=>{
      if(i<8){
        return(e)
      }
    })

    SetData(newData)
    
  }

  React.useEffect(()=>{

    SetDataStart();
  },[])

  React.useEffect(() => {
    if(text===""){
      SetDataStart();
    }
    else{
    setAnimate(true)
    getSearch(text, res => {
      SetData(res.data.results);
    });}
    setTimeout(()=>{setAnimate(false)},500)
  }, [text]);
  // console.log("^^^",data);

  return (
    <View style={styles.container}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Pressable onPress={()=>{props.navigation.goBack()}}>
      <Image source={require("../../assets/angle-left.png")} resizeMode={"contain"} style={styles.BackButton}/>
      </Pressable>
      <View style={styles.fieldContainer}>
        <Image
          source={require('../../assets/searching.png')}
          resizeMode={'contain'}
          style={styles.searchimg}
        />
        <TextInput
          ref={inputRef}
          placeholder="Search"
          placeholderTextColor={'#b2b2b2'}
          style={styles.field}
          onChangeText={text => {
            setText(text);
          }}
        />
        {animate ? (
          <ActivityIndicator color={'red'} size={'small'} animating={true} />
        ) : (
          <Pressable onPress={()=>{inputRef.current.clear()}}>
          <Image
            source={require('../../assets/cross-circle.png')}
            resizeMode={'contain'}
            style={styles.crossImg}
          />
          </Pressable>
        )}
      </View>
      </View>
      <View style={{padding: 4}}>
        <Text style={styles.text}>Top Results</Text>

        <ViewSimilarGrid
          data={data}
          screen={(e: any) => {
            props.navigation.navigate('Content', e);
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
  field: {
    backgroundColor: '#525252',
    color: '#F2f2f2',
    width: vw(225),
    marginRight:vh(10)
  },
  fieldContainer: {
    flexDirection: 'row',
    width: vw(300),
    marginTop: vh(50),
    backgroundColor: '#525252',
    alignItems: 'center',
    borderRadius:vh(8)
  },
  searchimg: {
    width: vw(18),
    height: vh(18),
    marginHorizontal: vw(8),
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: 'white',
    marginVertical:vh(10)
  },
  crossImg:{
    width:vw(16),
    height:vh(18)
  },
  BackButton:{
    width:vw(50),
    height:vh(30),
    marginTop:vh(50),marginRight:vw(5),
    alignSelf:"center"
  }
});
