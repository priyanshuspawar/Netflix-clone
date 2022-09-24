import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Downloads(props: any) {
  return (
    <View style={styles.container}>
      <Text
        style={{color: 'white'}}
        onPress={() => {
          props.navigation.reset({index: 0, routes: [{name: 'Details'}]});
        }}>
        Coming soon.....
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
