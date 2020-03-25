import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Error = (props) => {

  return (
    <Text style={styles.txt}>{props.txt}</Text>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 12, color: 'red', fontWeight: '500', textAlign: 'left'
  }
});

export default Error;