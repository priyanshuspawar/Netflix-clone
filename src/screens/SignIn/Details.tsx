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
import InputField from "../../components/InputField";
import NavrBarSignIn from '../../components/NavrBarSignIn';



// import user from '../../Auth/UserAuth';

export default function Details(props: any) {
  const dispatch = useDispatch();
  // const {email}: string | any = useSelector(state => state);
  const [mail, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showpassword, setShowpassword] = React.useState(true);
  const [CheckValidEmail, setCheckValidEmail] = React.useState(false);
  const [CheckValidpass, setCheckValidpass] = React.useState(false);
  const firstTextInput = React.useRef<any>(null);
  const secondTextInput = React.useRef<any>(null);

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
  console.log("checl");
  
  return (
    <View
    style={{flex: 1, backgroundColor: '#000000'}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <NavrBarSignIn change={()=>{props.navigation.replace("Opening")}}/>
      <KeyboardAvoidingView>
        {/* <TextInput
          style={[styles.input, CheckValidEmail ? {borderColor: 'red'} : {}]}
          placeholder="Email"
          placeholderTextColor={'white'}
          value={mail}
          onChangeText={text => ValidEmail(text)}
        /> */}
        
        <InputField 
        label={"Email"}
        LabelColor={"#FFFFFF"}
        ref={firstTextInput}
        marginTop={vh(8)}
        editable={true}
        TextColor={{color:"#FFFFFF",height:vh(50)}}
        placeholderTextColor={"#E2E2E2"}
        labelstyle={{color:"#FFFFFF",marginBottom:vh(2)}}
        InActivebackgroundColor={{backgroundColor:"#494949"}}
        ActivebackgroundColor={{backgroundColor:"#505050"}}
        fieldStyle={{height:vh(70),marginVertical:vh(20),borderRadius:vh(6),marginTop:vh(200)}}
        OutlineColor={
          !CheckValidEmail
            ? {borderColor: 'transparent', borderWidth: 1}
            : {borderColor: 'red', borderWidth: 1}
        }
        onChangeText={(text:string) => ValidEmail(text)}
        submitediting={(value:string) => {
          secondTextInput.current.focus();
          setEmail(value);
        }}
        />

<InputField 
        label={"Password"}
        LabelColor={"#FFFFFF"}
        marginTop={vh(8)}
        editable={true}
        TextColor={{color:"#FFFFFF"}}
        placeholderTextColor={"#E2E2E2"}
        labelstyle={{color:"#FFFFFF",marginBottom:vh(2)}}
        secureTextColor={"#E2E2E2"}
        secureTextEntry={true}
        InActivebackgroundColor={{backgroundColor:"#494949"}}
        ActivebackgroundColor={{backgroundColor:"#505050"}}
        fieldStyle={{height:vh(70),borderRadius:vh(6)}}
        OutlineColor={
          !CheckValidpass
            ? {borderColor: 'transparent', borderWidth: 1}
            : {borderColor: 'red', borderWidth: 1}
        }
        onChangeText={(text:string) => ValidPassword(text)}
        ref={secondTextInput}
        submitediting={(value:string) => {
          setEmail(value);
        }}
        />
        <Pressable
          disabled={mail == '' && password == ''}
          onPress={Signin}
          style={styles.buttonContainer}>
          <Text style={styles.buttomtxt}>Sign In</Text>
        </Pressable>

      
    </KeyboardAvoidingView>

    <TouchableOpacity onPress={()=>{props.navigation.replace("Opening")}}>
    <Text style={styles.signuptext}>New to Netflix? Sign up now.</Text>
    </TouchableOpacity>
    <Text style={styles.signInPageDis}>Sign in is protected by Google to ensure you're not a bot
    </Text>
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
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily:"Montserrat-SemiBold"
  },
  buttonContainer: {
    height: vh(60),
    width: vw(285),
    borderWidth: 2,
    borderColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:vh(35),
    alignSelf:"center",
    borderRadius:vh(6),marginBottom:vh(20)
  },
  signInPageDis:{
    fontSize: 14,
    color: '#b2b2b2',
    fontFamily:"Montserrat-Medium",
    textAlign:"center",
    paddingHorizontal:vw(30),
    marginTop:vh(70)
  },
  Notation:{
    marginTop:vh(50),
    color: '#b2b2b2',
    fontFamily:"Montserrat-Regular",
    textAlign:"center",paddingHorizontal:vw(100)
  },
  signuptext:{
    fontSize: 16,
    color: '#e2e2e2',
    fontFamily:"Montserrat-Bold",
    textAlign:"center",
    marginTop:vh(20),
  }
});
