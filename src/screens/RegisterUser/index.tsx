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
import auth from '@react-native-firebase/auth';
import PlanBanner from '../../components/PlanBanner';
import {Provider ,Dialog, Portal, Button, Paragraph } from 'react-native-paper';

const RegisterUser = (props: any) => {
  const initialState = [
    {id: 0, planActive: true},
    {id: 1, planActive: false},
    {id: 2, planActive: false},
  ];
  const firstTextInput = React.useRef(null);
  const secondTextInput = React.useRef(null);
  const [scroll, setScroll] = React.useState(1);
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [CheckValidEmail, setCheckValidEmail] = React.useState<boolean>();
  const [CheckValidpass, setCheckValidpass] = React.useState<boolean>();
  const [SignUpDone, setsignUpDone] = React.useState(false);
  const [ActivePlans, setActivePlans] = React.useState(initialState);
  const [showAlert,setshowAlert]=React.useState(false);

  const UpdateState = (index: Number) => {
    setActivePlans(prevState => {
      console.log('@@@@@', index);

      const newState = prevState.map(obj => {
        if (obj.id === index) {
          return {...obj, planActive: true};
        }
        return {...obj, planActive: false};
      });
      return newState;
    });
  };

  const [contentOffset, setcontentOffset] = React.useState({
    width: fullWidth,
    y: 0,
  });

  const [Scrollref, SetScrollref] = React.useState(null);

  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {
        console.log('working');
        setsignUpDone(true);
        Scrollref.scrollTo({x: contentOffset.width, y: 0, animation: true});
        setScroll(scroll + 1);
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const ScrollChange = () => {
    Scrollref.scrollTo({x: contentOffset.width, y: 0, animation: true});
    setScroll(scroll + 1);
  };

  const ValidEmail = (text: string) => {
    const re = /\S+@\S+\.\S+/;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (text.length > 2) {
      if (re.test(text) || regex.test(text)) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }
    }
  };

  const ValidPassword = (text: string) => {
    setPassword(text);
    if (text.length > 4) {
      if (text.length >= 8) {
        setCheckValidpass(false);
      } else {
        setCheckValidpass(true);
      }
    }
  };

  // console.log(Email,CheckValidEmail,CheckValidpass);
  // console.log(!(CheckValidEmail&&CheckValidpass));

  React.useEffect(() => {
    if (scroll == 4) {
      setshowAlert(true)
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
        {
          planName: 'Basic',
          Price: '₹ 199',
          Quality: 'Good',
          Resolution: '480p',
        },
        {
          planName: 'Standard',
          Price: '₹ 499',
          Quality: 'Better',
          Resolution: '1080p',
        },
        {
          planName: 'Premium',
          Price: '₹ 649',
          Quality: 'Best',
          Resolution: '4k+HDR',
        },
      ],
    },
    {
      id: 3,
      title: 'Choose payment Mode.',
      description: 'Currently all plans are free Enjoy 🎉',
    },
  ];
  console.log(ActivePlans);

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





      <View style={{height: vh(520)}}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView
          scrollEnabled={false}
            automaticallyAdjustKeyboardInsets={true}
            onScroll={nativeEvent => {
              setcontentOffset(nativeEvent.nativeEvent.contentSize);
            }}
            style={{alignSelf: 'center'}}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{justifyContent: 'center'}}
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
                  {e?.describe&&<Text style={styles.StepDescribe}>{e?.describe}</Text>}
                  {e?.credentialsRequired && (
                    <InputField
                      label={'Email'}
                      InActivebackgroundColor={'white'}
                      fieldStyle={{borderColor: '#00000075', borderWidth: 1}}
                      ActivebackgroundColor={'white'}
                      textColor={{color: '#000000'}}
                      ref={firstTextInput}
                      onChangeText={text => ValidEmail(text)}
                      submitediting={value => {
                        setEmail(value);
                        secondTextInput.current.focus();
                      }}
                      OutlineColor={
                        !CheckValidEmail
                          ? {borderColor: '#1c84fc', borderWidth: 1}
                          : {borderColor: 'red', borderWidth: 1}
                      }
                    />
                  )}
                  {e?.credentialsRequired && CheckValidEmail && (
                    <Text
                      style={{
                        color: '#fc3232',
                        marginLeft: vw(4),
                        fontSize: 11,
                      }}>
                      Enter a valid email
                    </Text>
                  )}
                  {e?.credentialsRequired && (
                    <InputField
                      label={'Add a password'}
                      InActivebackgroundColor={'white'}
                      fieldStyle={{borderColor: '#00000075', borderWidth: 1}}
                      ActivebackgroundColor={'white'}
                      onChangeText={text => ValidPassword(text)}
                      textColor={{color: 'black'}}
                      ref={secondTextInput}
                      secureTextEntry={true}
                      submitediting={value => {
                        setPassword(value);
                      }}
                      OutlineColor={
                        !CheckValidpass
                          ? {borderColor: '#1c84fc', borderWidth: 1}
                          : {borderColor: 'red', borderWidth: 1}
                      }
                    />
                  )}
                  {e?.credentialsRequired && CheckValidpass && (
                    <Text
                      style={{
                        color: '#fc3232',
                        marginLeft: vw(4),
                        fontSize: 11,
                      }}>
                      Password should be of 8 or more characters
                    </Text>
                  )}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {!e?.credentialsRequired &&
                      e?.plans?.map((e, i) => {
                        return (
                          <PlanBanner
                            planName={e.planName}
                            onPress={() => {
                              UpdateState(i);
                            }}
                            Active={ActivePlans[i].planActive}
                          />
                        );
                      })}
                  </View>
                  {!e?.credentialsRequired && e?.plans && (
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginVertical: vh(10),
                        color: '#000000',
                      }}>
                      Monthly Price
                    </Text>
                  )}

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    {!e?.credentialsRequired &&
                      e?.plans?.map((e, i) => {
                        return (
                          <Text
                            key={i}
                            style={[
                              {textAlign: 'center'},
                              ActivePlans[i].planActive
                                ? {color: '#E60A14'}
                                : {color: '#000000'},
                            ]}>
                            {e.Price}
                          </Text>
                        );
                      })}
                  </View>
                  {!e?.credentialsRequired && e?.plans && (
                    <Text
                      style={{
                        borderTopColor: '#00000035',
                        borderTopWidth: 1,
                        alignSelf: 'center',
                        marginVertical: vh(10),
                        color: '#000000',
                        width:vw(300),
                        textAlign:"center",paddingTop:vh(10)
                      }}>
                      Video Quality
                    </Text>
                  )}

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    {!e?.credentialsRequired &&
                      e?.plans?.map((e, i) => {
                        return (
                          <Text
                            key={i}
                            style={[
                              {textAlign: 'center'},
                              ActivePlans[i].planActive
                                ? {color: '#E60A14'}
                                : {color: '#000000'},
                            ]}>
                            {e.Quality}
                          </Text>
                        );
                      })}
                  </View>

                  {!e?.credentialsRequired && e?.plans && (
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginVertical: vh(10),
                        color: '#000000',
                        borderTopColor: '#00000035',
                        borderTopWidth: 1,paddingTop:vh(10),width:vw(300),textAlign:"center"
                      }}>
                      Resolution
                    </Text>
                  )}

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    {!e?.credentialsRequired &&
                      e?.plans?.map((e, i) => {
                        return (
                          <Text
                            key={i}
                            style={[
                              {width: vw(115), textAlign: 'center'},
                              ActivePlans[i].planActive
                                ? {color: '#E60A14'}
                                : {color: '#000000'},
                            ]}>
                            {e.Resolution}
                          </Text>
                        );
                      })}
                  </View>

                  {!e?.credentialsRequired && (
                    <Text style={styles.endText}>{e?.description}</Text>
                  )}
                </View>
              );
            })}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <NextButton
        label={'Next'}
        disabled={CheckValidEmail || CheckValidpass}
        change={() => {
          scroll == 1 && !SignUpDone ? SignUp() : ScrollChange();
          
        }}
      />
    <Provider>
        <Portal>
          <Dialog visible={showAlert} onDismiss={()=>{setshowAlert(false)}}>
            <Dialog.Title style={{textAlign:"center"}}><Text style={{fontSize:20,fontFamily:"Montserrat-SemiBold"}}>Account Created</Text></Dialog.Title>
            <Dialog.Content>
              <Text style={{textAlign:"center",fontFamily:"Montserrat-SemiBold",fontSize:15}}>Go to Sign In to start your binge 🌈</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={()=>{props.navigation.replace("Details")}}>Sign In</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        </Provider>
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
    color: 'black',
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
    marginBottom:vh(20)
  },
  plansText: {
    color: '#000000',
    fontSize: 20,
    borderWidth: 1,
    width: vw(100),
    textAlign: 'center',
    height: vh(45),
  },
  endText: {
    color: '#E60A14',
    fontFamily:"Montserrat-SemiBold",
    fontSize:30
  },
});
