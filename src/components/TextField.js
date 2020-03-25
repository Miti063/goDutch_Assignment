import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const TextField = (props) => {

  const txtRef = useRef(null);

  const getTxtVal = () => {
    return txtRef.current._lastNativeText;
  }

  return (
    <View style={styles.container}>
      <TextInput 
        ref={txtRef}
        style={styles.textInput}
        placeholder={props.placeholder}
        value={props.val}
        onChangeText={props.onChange}
        keyboardType={props.keyboardType === 'alpha' ? 'email-address' : 'numeric'}
        maxLength={props.maxLength ? props.maxLength : null}
        allowFontScaling={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  textInput: {
    borderWidth: 1, borderRadius: 5, borderColor: '#F1F1F1', fontSize: 14, height: 40, paddingLeft: 10, textAlign: 'center'
  }
});

export default TextField;