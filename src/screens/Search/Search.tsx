import {Image, StyleSheet, Text, View, TextInput, ActivityIndicator} from 'react-native';
import React from 'react';
import {fullWidth, vh, vw} from '../../utils/dimension';
import { getSearch } from '../../utils/services';
import ViewSimilarGrid from '../../components/ViewSimilarGrid';

const Search = (props:any) => {
    const [data,SetData]=React.useState()
    const [text,setText]=React.useState("");
    const [animate,setAnimate]=React.useState(true)
    React.useEffect(()=>{
        getSearch(text,(res)=>{SetData(res.data.results)})
        
    },[text])
    // console.log("^^^",data);



    
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Image
          source={require('../../assets/search.png')}
          resizeMode={'contain'}
          style={styles.searchimg}
        />
        <TextInput
          placeholder="Search for a show, movie, genre, etc."
          placeholderTextColor={'white'}
          style={styles.field}
          onChangeText={(text)=>{setText(text)}}
        />
        <ActivityIndicator color={"red"} size={"small"} animating={animate}/>
      </View>
     <View style={{padding:4}}>
      <Text style={styles.text}>Top Results</Text>
    
      <ViewSimilarGrid data={data} screen={(e:any)=>{
          props.navigation.navigate("Content",e )
        }}/>
    
    </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  field: {
    backgroundColor: 'grey',
    color:"white",
    width:vw(300)
  },
  fieldContainer: {
    flexDirection: 'row',
    width: fullWidth,
    marginTop: vh(50),
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  searchimg: {
    width: vw(20),
    height: vh(20),
    marginHorizontal: vw(8),

  },
  text:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:20,
    color:"white",
    marginVertical:vh(8)
  }
});
