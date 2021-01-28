import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

const TowIcon = () => {
  return (
    <View style={styles.layRightBtn}>
      <Icon name="ic-like-pre" />
      <Icon name="ic-cart-1" />
    </View>
  );
};

export default TowIcon;

const styles = StyleSheet.create({
  layRightBtn: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
});
