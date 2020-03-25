import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {

  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8', alignItems: 'center', justifyContent: 'center', position: 'relative', flex: 1, paddingHorizontal: 8
  }
});

export default CardSection;