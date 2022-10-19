import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {EmailAction, PassAction} from '../../Redux/action';
import auth from '@react-native-firebase/auth';



// import user from '../../Auth/UserAuth';

export default function Details(props: any) {
  const dispatch = useDispatch();
  // const {email}: string | any = useSelector(state => state);
  const [mail, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showpassword, setShowpassword] = React.useState(true);
  const [CheckValidEmail, setCheckValidEmail] = React.useState(false);
  const [CheckValidpass, setCheckValidpass] = React.useState(false);
  

  const Signin=()=>{
    auth()
    .signInWithEmailAndPassword(mail,password)
    .then(()=>{
      console.log("working");
      dispatch(EmailAction(mail));
      dispatch(PassAction(password));
      props.navigation.replace('Home');
    })
    .catch((error)=>{
      console.log(error.code);
    })
  }






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
  // console.log(user);

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Netflixlogo.png')}
          resizeMode={'contain'}
          style={{height: vh(120), width: vw(300)}}
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
          <TouchableOpacity
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
          disabled={mail == '' && password == ''}
          onPress={Signin}
          style={styles.buttonContainer}>
          <Text style={styles.buttomtxt}>Sign In</Text>
        </Pressable>
        {/* {empty&&<Text style={{color:"white"}}>Please....</Text>} */}

        {/* <Text style={{color: 'white'}}>{email}</Text> */}
      </View>
    </KeyboardAvoidingView>
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
    width: vw(320),
    borderWidth: 1,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
