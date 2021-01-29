import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../themes/Colors';
const ItemInput = (props) => {
  return (
    <View style={styles.itemChangePass}>
      <Text style={styles.txtTitleChangePass}>{props.title}</Text>
      <TextInput style={styles.txtChangePass} onChangeText={props.onChange} />
    </View>
  );
};
const styles = StyleSheet.create({
  itemChangePass: {
    width: '100%',
    marginTop: 20,
  },
  txtTitleChangePass: {
    fontWeight: '400',
    fontSize: 15,
    color: Colors.btnLevel2,
  },
  txtChangePass: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel3,
    height: 35,
    borderRadius: 5,
    fontSize: 13,
    paddingLeft: 10,
    marginTop: 5,
  },
});

export default ItemInput;
