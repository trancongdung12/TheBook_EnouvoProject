import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';

const Star = () => {
  var starView = [];
  let starSize = 4;
  for (let i = 0; i < 5; i++) {
    if (i < starSize) {
      starView.push(<Icon key={i} name="star" size={10} color={colors.primary} />);
    } else {
      starView.push(<Icon key={i} name="ic-star-pre" size={10} color={colors.primary} />);
    }
  }
  return <View style={styles.layoutStar}>{starView}</View>;
};

const styles = StyleSheet.create({
  layoutStar: {
    flexDirection: 'row',
  },
});

export default Star;
