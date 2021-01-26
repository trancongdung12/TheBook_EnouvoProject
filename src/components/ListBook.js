import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../themes/Colors';

const ListBook = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layoutRelated}>
        <Text style={styles.titleRelated}>Sách tương tự</Text>
        <Text style={styles.textViewMore}>xem hết</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  layoutRelated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRelated: {
    fontSize: 16,
  },
  textViewMore: {
    color: colors.secondary,
  },
});

export default ListBook;
