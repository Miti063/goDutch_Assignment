import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = (props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.txt}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%', height: 45, backgroundColor:'#5A67F2', borderRadius: 5, justifyContent: 'center', alignItems:'center', marginTop: 40
  },
  txt: {
    fontSize: 18, color: '#FFF', fontWeight: '500', textAlign: 'center'
  }
});

export default Button;