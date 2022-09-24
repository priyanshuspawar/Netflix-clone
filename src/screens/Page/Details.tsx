import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import { EmailAction,PassAction } from '../../Redux/action';
import Navgation from '../../Navigation';

export default function Details(props:any) {
  const dispatch = useDispatch();
  const {email}: string | any = useSelector(state => state);
  const [mail, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showpassword, setShowpassword] = React.useState(true);
  const [CheckValidEmail, setCheckValidEmail] = React.useState(false);
  const [CheckValidpass, setCheckValidpass] = React.useState(false);
  const [empty,setEmpty]=React.useState(false);

  const ValidEmail = (text: string) => {
    const re = /\S+@\S+\.\S+/;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
      // console.log('regex', text);
    } else {
      setCheckValidEmail(true);
      // console.log('withoutregex', text);
    }
  };

  const ValidPassword = (text: string) => {
    setPassword(text);
    if (text.length >= 8) {
      setCheckValidpass(false);
    } else {
      setCheckValidpass(true);
    }
  };

  return (
    <View style={{flex:1,backgroundColor:"black",justifyContent:"center"}}>
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/Netflixlogo.png')}
        resizeMode={'contain'}
        style={{height: 120, width: 300}}
      />
      <TextInput
        style={[styles.input, CheckValidEmail ? {borderColor: 'red'} : {}]}
        placeholder="Email"
        placeholderTextColor={'white'}
        value={mail}
        onChangeText={text => ValidEmail(text)}
      />
      <View>
        <TextInput
          style={[styles.input, CheckValidpass ? {borderColor: 'red'} : {}]}
          secureTextEntry={showpassword}
          placeholderTextColor={'white'}
          placeholder="Password"
          value={password}
          onChangeText={text => ValidPassword(text)}
        />
        <TouchableOpacity disabled={email=="" && password==""}
          onPress={() => setShowpassword(!showpassword)}
          style={{position: 'absolute', top: vh(40), right: vw(15)}}>
          <Image
            source={
              !showpassword
                ? require('../../assets/eye.png')
                : require('../../assets/hidden.png')
            }
            style={{width: vw(20), height: vh(20)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Pressable
        onPress={() => {
          if(!(mail=="" && password=="")){
            setEmpty(true)
          }
          else{
            setEmpty(false)
          dispatch(EmailAction(mail))
          dispatch(PassAction(password))
          props.navigation.navigate("Home")}
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttomtxt}>Sign In</Text>
      </Pressable>
      {empty&&<Text style={{color:"white"}}>Please....</Text>}

      <Text style={{color: 'white'}}>{email}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: '#333333',
    color: 'white',
    width: vw(320),
    marginVertical: 20,
    borderRadius: vw(8),
    paddingLeft: vw(10),
  },
  buttomtxt: {
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    height: vh(50),
    width: 150,
    borderWidth: 4,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
