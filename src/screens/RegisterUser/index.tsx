import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import LinearGradient from 'react-native-linear-gradient';
import {fullheight, fullWidth, vh, vw} from '../../utils/dimension';
import {BlurView} from '@react-native-community/blur';
import NavBar from '../Opening/NavBar';
import NextButton from '../../components/NextButton';
import Details from '../SignIn/Details';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterUser = (props: any) => {
  const firstTextInput = React.useRef(null);
  const secondTextInput = React.useRef(null);
  const SubmitInput = React.useRef(null);
  const [scroll, setScroll] = React.useState(1);
  const [contentOffset, setcontentOffset] = React.useState({
    width: fullWidth,
    y: 0,
  });

  const [Scrollref, SetScrollref] = React.useState(null);

  React.useEffect(() => {
    if(scroll==4){
      Alert.alert(
        "Account Created",
        "Go back to sign in",
        [{text:"Okay",onPress:()=>{props.navigation.replace(Details)}}]
      )
      }
  }, [scroll]);

  

  const data = [
    {
      id: 1,
      title: 'Create a password to start your membership',
      describe:
        "Just a few more steps and you're done! We hate paperwork, too.",
      credentialsRequired: true,
    },
    {
      id: 2,
      title: 'Choose your plan.',
      plans: [
        {planName: 'Basic Plan'},
        {planName: 'Standard'},
        {planName: 'Premium'},
      ],
    },
    {
      id: 3,
      title: 'Choose payment Mode.',
      description: 'Currently all plans are free Enjoy 🎉',
    },
  ];

  return (
    <View style={styles.container}>
  
      <NavBar
        styletext2={{color: 'black', fontSize: 15}}
        styletext1={{color: 'black', fontSize: 14}}
        styleContainer={{
          borderBottomWidth: 1,
          borderColor: '#00000040',
          position: 'relative',
    
        }}
        screen={() => {
          props.navigation.navigate('Details');
        }}
      />
      
      <View style={{height:vh(520)}}>
      <KeyboardAvoidingView behavior='padding' enabled>
      <ScrollView
        scrollEnabled
        automaticallyAdjustKeyboardInsets={true}
        onScroll={nativeEvent => {
          setcontentOffset(nativeEvent.nativeEvent.contentSize);
        }}
        style={{alignSelf: 'center'}}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{justifyContent:"center"}}
        ref={ref => {
          SetScrollref(ref);
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {data.map((e, i) => {
          return (
            <View key={e.id} style={styles.stepContainer}>
              <Text style={styles.StepText}>STEP {e.id} OF 3</Text>
              <Text style={styles.StepTitle}>{e.title}</Text>
              <Text style={styles.StepDescribe}>{e?.describe}</Text>
              {e?.credentialsRequired && (
                <InputField
                  label={'Email'}
                  InActivebackgroundColor={'white'}
                  fieldStyle={{borderColor: '#00000075', borderWidth: 1}}
                  ActivebackgroundColor={'white'}
                />
              )}
              {e?.credentialsRequired && (
                <InputField
                  label={'Add a password'}
                  InActivebackgroundColor={'white'}
                  fieldStyle={{borderColor: '#00000075', borderWidth: 1}}
                  ActivebackgroundColor={'white'}
                />
              )}
              {!e?.credentialsRequired &&
                e?.plans?.map((e, i) => {
                  return <Text key={e.planName}>{e.planName}</Text>;
                })}
              {!e?.credentialsRequired && <Text>{e?.description}</Text>}
            </View>
          );
        })}
      </ScrollView>
      </KeyboardAvoidingView>
      </View>
      <NextButton
        label={'Next'}
        change={() => {
          Scrollref.scrollTo({x: contentOffset.width, y: 0, animation: true});
          setScroll(scroll+1)
        }}
      />
    </View>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },
  stepContainer: {
    width: fullWidth,
    height: vh(300),
    marginTop: vh(70),
    padding: vh(28),
  },
  StepText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: 'Black',
  },
  StepTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: '#000000',
    marginBottom: vh(10),
  },
  StepDescribe: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#000000',
  },
});
