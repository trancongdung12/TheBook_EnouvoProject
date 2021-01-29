import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

const TitleHeader = (props) => {
  return (
    <View style={styles.topHeader}>
      <TouchableOpacity onPress={props.onBackLayout}>
        <Icon style={styles.icTop} name={props.leftIcon} />
      </TouchableOpacity>
      <Text style={styles.txtTopHeader}>{props.title}</Text>
      <Icon style={styles.icTop} name={props.rightIcon} />
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
  },
  icTop: {
    fontSize: 20,
    color: '#5f5f5f',
  },
  txtTopHeader: {
    fontSize: 15,
    color: '#4a4a4a',
  },
});
