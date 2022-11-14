import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {vh} from '../../utils/dimension';
import {EmailAction} from '../../Redux/action';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AccountOptions from '../../components/AccountOptions';

export default function Account(props: any) {
  const dispatch = useDispatch();

  const options=[
    {key:1,uri:require("../../assets/notification-bell.png"),title:"Notifications"},
    {key:2,uri:require("../../assets/check.png"),title:"My List"},
    {key:3,uri:require("../../assets/settings.png"),title:"App Settings"},
    {key:4,uri:require("../../assets/user.png"),title:"Account"},
    {key:5,uri:require("../../assets/interrogation.png"),title:"Help"},
  ]



  const SignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        dispatch(EmailAction(''));
        props.navigation.reset({index: 0, routes: [{name: 'Opening'}]});
      });
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile1.png')}
        style={{marginBottom: vh(20)}}
      />

      {
        options.map((e,i)=>{
          return(
            <Pressable key={e.key} style={styles.Optionscontainer}>
            <AccountOptions imageSource={e.uri} title={e.title}/>
            </Pressable>
          )
        })
      }

      <Text
        style={{color: 'white'}}
        onPress={
          SignOut
        }>
        Logout
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Optionscontainer:{
    width:"98%",
    height:vh(60),
    backgroundColor:"#121212",
    borderRadius:vh(12),
    marginBottom:vh(4)
}
});
