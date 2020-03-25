import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import CardSection from '../components/CardSection';
import Card from '../components/Card';

const Details = (props) => {

  return (
    <CardSection>
      <Card>
        <Text>Details</Text>
      </Card>
    </CardSection>
  );
};

export default Details;