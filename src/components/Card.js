import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {

  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    elevation: 7,
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

export default Card;