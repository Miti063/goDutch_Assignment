import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

import CardSection from '../components/CardSection';
import Card from '../components/Card';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { ValidateUPIId } from '../lib/Validation';
import Error from '../components/Error';
import { saveData } from '../redux/Action/ActionCreator';

const AccounCreation = (props) => {

  const [profession, setProfession] = useState(0);
  const [name, setName] = useState('');
  const [UPIId, setUPIId] = useState('');
  const [errors, setErrors] = useState({
    nameErr: null,
    UPIErr: null
  });
  const dispatch = useDispatch();

  const checkForValidation = () => {
    let newValues = { ...errors };

    if (!name) newValues.nameErr = 'Please enter name';

    if (!UPIId) newValues.UPIErr = 'Please enter UPI ID';
    else if (!ValidateUPIId(UPIId)) newValues.UPIErr = 'Please enter valid UPI id';

    if (!newValues.nameErr && !newValues.UPIErr) {
      //To store the value in redux store
      dispatch(saveData({Profession: profession ? 'Professional' : 'Student', Name: name, UPIid: UPIId }));
      props.navigation.navigate('Details');
    }
    else setErrors(newValues);
  }

  const onNameChange = (val) => {
    setName(val);
    setErrors({ nameErr: null });
  }

  const onUPIIDChange = (val) => {
    setUPIId(val);
    setErrors({ UPIErr: null });
  }

  const onSelectButton = (val) => {
    setProfession(val);
  }

  return (
    <CardSection>
      <Text style={styles.headerTxt}>setup your GoDutch account</Text>
      <Card>
        <Image style={styles.img} source={require('../assets/images/Logo.png')} />
        <View style={[styles.childCont, { marginTop: 30 }]}>
          <Text style={styles.txt}>Current Profession</Text>
          <View style={styles.rowCont}>
            <TouchableOpacity style={[styles.btn, { borderColor: profession === 0 ? '#5A67F2' : '#F1F1F1' }]} onPress={() => onSelectButton(0)}>
              <Text style={{ color: profession === 0 ? '#5A67F2' : '#000' }}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { borderColor: profession ? '#5A67F2' : '#F1F1F1' }]} onPress={() => onSelectButton(1)}>
              <Text style={{ color: profession ? '#5A67F2' : '#000' }}>Professional</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.childCont}>
          <Text style={styles.txt}>Full Name<Text style={{ color: 'red' }}>*</Text></Text>
          <TextField val={name} onChange={onNameChange} keyboardType={'alpha'} />
          <Error txt={errors.nameErr} />
        </View>
        <View style={styles.childCont}>
          <Text style={styles.txt}>UPI ID<Text style={{ color: 'red' }}>*</Text></Text>
          <TextField val={UPIId} onChange={onUPIIDChange} keyboardType={'alpha'} />
          <Error txt={errors.UPIErr} />
        </View>
        <Button buttonText='Continue' onPress={checkForValidation} />
      </Card>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 70, height: 70, marginTop: 20
  },
  rowCont: {
    flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10
  },
  btn: {
    width: '49%', height: 45, borderColor: '#F1F1F1', borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1
  },
  childCont: {
    marginTop: 10, marginHorizontal: 10, width: '100%'
  },
  txt: {
    fontSize: 13
  },
  headerTxt: {
    textAlign: 'left', marginTop: 10, marginBottom: 5, width: '100%' 
  }
});

export default AccounCreation;
