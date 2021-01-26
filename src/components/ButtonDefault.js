import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Color from '../themes/Colors';
const ButtonDefault = (props) => {
  return (
    <TouchableOpacity
      style={props.checkButton ? styles.btnDefault : styles.btnDefaults}
      onPress={props.onSubmit}
    >
      <Text style={props.checkButton ? styles.txtBtnDefault : styles.txtBtnDefaults}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  btnDefault: {
    width: width / 2 - 60,
    height: 40,
    borderRadius: 2,
    backgroundColor: Color.secondary,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnDefault: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  btnDefaults: {
    width: width / 2 - 60,
    height: 40,
    borderRadius: 2,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: Color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnDefaults: {
    color: Color.txtLevel3,
    fontWeight: '600',
    fontSize: 15,
  },
});
export default ButtonDefault;
