import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  },
  contianer: {
    borderColor: 'red',
    borderWidth: 10,
  }
});

export default Container;