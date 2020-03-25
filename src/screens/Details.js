import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux'

import CardSection from '../components/CardSection';
import Card from '../components/Card';
import Button from '../components/Button';

const Details = (props) => {

  const data = useSelector(state => state.data);

  const navigateToLoginPage = () => {
    props.navigation.navigate('Login');
  }

  return (
    <CardSection>
      <Text style={styles.headerTxt}>Your Details</Text>
      <Card>
        <View style={styles.childCont}>
          <Text style={styles.titleTxt}>Name</Text>
          <View style={styles.line} />
          <Text style={styles.txt}>{data.Name}</Text>
          <View style={styles.line} />
          <Text>Mobile No</Text>
          <View style={styles.line} />
          <Text style={styles.txt}>{data.MobileNo}</Text>
          <View style={styles.line} />
          <Text>Upi id</Text>
          <View style={styles.line} />
          <Text style={styles.txt}>{data.UPIid}</Text>
          <View style={styles.line} />
          <Text>Profession</Text>
          <View style={styles.line} />
          <Text style={styles.txt}>{data.Profession}</Text>
        </View>
      </Card>
      <Button buttonText='Continue' onPress={navigateToLoginPage} />
    </CardSection>
  );
};

const styles = StyleSheet.create({
  childCont: {
    marginHorizontal: 10, width: '100%'
  },
  titleTxt: {
    marginTop: 10
  },
  txt: {
    color: '#5A67F2'
  },
  headerTxt: {
    textAlign: 'left', marginTop: 10, marginBottom: 5, width: '100%'
  },
  line: {
    backgroundColor: '#F1F1F1', height: 1, width: '98%', marginVertical: 15
  }
});

export default Details;
