import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import Color from '../themes/Colors';
const { width } = Dimensions.get('window');
const TextInputs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{props.title}</Text>
      {props.checkPass ? (
        <View style={styles.inputPass}>
          <TextInput
            placeholder={props.name}
            style={styles.txtInput}
            onChangeText={props.txtChange}
            textContentType={props.typeInput}
            secureTextEntry={props.secureTextEntry}
          />
          <Icons name="ic-hide-password" style={styles.iconEyes} />
        </View>
      ) : (
        <TextInput
          placeholder={props.name}
          style={styles.txtInput}
          onChangeText={props.txtChange}
          textContentType={props.typeInput}
          secureTextEntry={props.secureTextEntry}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
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
  inputPass: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  iconEyes: {
    marginTop: 12,
    fontSize: 25,
    right: (10 * width) / 100,
  },
});
export default TextInputs;
