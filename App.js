/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import 'react-native-gesture-handler';

import HomeNavigation from './src/HomeNavigation';
import MobileNumber from './src/screens/Login';


const App = () => {
  return (
    <HomeNavigation/>
  );
};

export default App;
