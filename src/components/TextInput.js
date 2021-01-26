import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Color from '../themes/Colors';
const TextInputs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{props.title}</Text>
      <TextInput placeholder={props.name} style={styles.txtInput} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  txtTitle: {
    fontWeight: '300',
    color: Color.greyishBrown,
  },
  txtInput: {
    height: 40,
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    paddingLeft: 12,
    paddingTop: 5.5,
    paddingBottom: 5.5,
    paddingRight: 50,
  },
});
export default TextInputs;
