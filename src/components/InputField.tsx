import {StyleSheet, Text, View, Animated, TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimension';

const InputField = (props: any, ref: any) => {
  const [value, setValue] = React.useState<string>();
  const [padding, setpadding] = React.useState(5);
  const [placeValue, setplaceValue] = React.useState(props.label);
  const [hide, setHide] = React.useState(false);
  const [focus, setfocus] = React.useState(false);
  const moveText = React.useRef(new Animated.Value(0)).current;
  const [Show,setShow]=React.useState(true)


  const onChangeText = React.useCallback(
    (text: string) => {
      setValue(text);
    },
    [value],
  );

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
        focus
          ? [props.InActivebackgroundColor, props.OutlineColor]
          : [props.ActivebackgroundColor],
      ]}>
      {hide && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        autoCapitalize={'none'}
        onChangeText={text => {
          props.onChangeText(text);
          onChangeText(text);
        }}
        value={value}
        secureTextEntry={props.secureTextEntry==Show}
        style={[
          styles.input,
          props.TextColor,
          focus
            ? props.InActivebackgroundColor
            : [props.ActivebackgroundColor, {paddingTop: vh(1)}],
        ]}
        onSubmitEditing={({nativeEvent}) => {
          setValue(nativeEvent.text);
          props.submitediting(nativeEvent.text);
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
      {props?.secureTextEntry&&<Text onPress={()=>{setShow(!Show)}} style={styles.secureLabel}>{!Show?"Show":"Hide"}</Text>}
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
    marginVertical: vh(10),
  },
  input: {
    fontSize: 15,
    height: vh(40),
    marginTop: vh(5),
    color:"#000000"
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
  secureLabel:{
    position:"absolute",
    right:20,
    top:13

  }
});