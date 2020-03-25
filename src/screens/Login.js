import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import CardSection from '../components/CardSection';
import Card from '../components/Card';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { ValidateMobile } from '../lib/Validation';
import Error from '../components/Error';

const Login = (props) => {

  const [txtVal, setTxtVal] = useState('');
  const [error, setError] = useState(null);

  const checkForValidation = () => {
    if (!txtVal) setError('Please enter the mobile number');
    else if (!ValidateMobile(txtVal)) setError('Please enter valid mobile number');
    else props.navigation.navigate('AccounCreation');
  }

  const changeTxtValue = (val) => {
    setTxtVal(val);
    setError(null);
  }

  return (
    <CardSection>
      <Card>
        <View style={styles.rowCont}>
          <Image style={styles.img} source={require('../assets/images/Logo.png')} />
          <Text style={styles.titleTxt}>goDutch</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.childCont}>
          <Text style={styles.txt}>Mobile Number<Text style={{ color: 'red' }}>*</Text></Text>
          <TextField val={txtVal} onChange={changeTxtValue} maxLength={10} />
          <Error txt={error} />
        </View>
        <Button buttonText='Continue' onPress={checkForValidation} />
      </Card>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  rowCont: {
    flexDirection: 'row', alignItems: 'center'
  },
  img: {
    width: 40, height: 40
  },
  titleTxt: {
    fontSize: 35, fontWeight: 'bold', color: '#000', marginLeft: 5
  },
  line: {
    backgroundColor: '#F1F1F1', height: 1, width: '98%', marginTop: 15
  },
  childCont: {
    marginTop: 30, marginHorizontal: 10, width: '100%'
  },
  txt: {
    fontSize: 13
  }
});

export default Login;
