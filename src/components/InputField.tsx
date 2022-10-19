import {StyleSheet, Text, View, Animated, TextInput} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimension';

const InputField = (props: any, ref: any) => {
  const [value, setValue] = React.useState('');
  const [padding, setpadding] = React.useState(5);
  const [placeValue, setplaceValue] = React.useState(props.label);
  const [hide, setHide] = React.useState(false);
  const [focus, setfocus] = React.useState(false);
  const moveText = React.useRef(new Animated.Value(0)).current;

  // React.useEffect(()=>{
  //     if(value!==""){
  //         moveTextTop();
  //     }
  //     else if(value===""){
  //         moveTextBottom();
  //     }

  // },[value])

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onFocusHandler = () => {
    setfocus(true);
    setplaceValue('');
    moveTextTop();
  };

  const onBlurHandler = () => {
    setfocus(false);
    if (value === '') {
      moveTextBottom();
      setplaceValue(props.label);
    }
  };

  const moveTextTop = () => {
    setpadding(10);
    setHide(true);
  };

  const moveTextBottom = () => {
    setHide(false);
    setpadding(5);
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: vh(padding)},
        props.fieldStyle,
        focus ? props.InActivebackgroundColor : props.ActivebackgroundColor,
      ]}>
      {hide && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        autoCapitalize={'none'}
        style={[
          styles.input,
          focus ? props.InActivebackgroundColor : [props.ActivebackgroundColor,{paddingTop:vh(1)}],
        ]}
        onSubmitEditing={({nativeEvent}) => {
          setValue(nativeEvent.text);
          props.submitediting();
        }}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
        selectionColor={'white'}
        placeholder={placeValue}
        placeholderTextColor={'#b2b2b2'}
        ref={ref}
      />
    </View>
  );
};

const forwardRef = React.forwardRef(InputField);

export default forwardRef;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vh(10),
    borderRadius: 2,
    width: vw(320),
    alignSelf: 'center',
    marginVertical:vh(10)
  },
  input: {
    fontSize: 15,
    height: vh(40),
    color: '#e5e5e5',
    marginTop: vh(5),
  },
  label: {
    color: '#b2b2b2',
    fontSize: 10,
    position: 'absolute',
    zindex: 1,
    left: vw(13),
    fontWeight: '500',
    top: vh(2),
  },
});
