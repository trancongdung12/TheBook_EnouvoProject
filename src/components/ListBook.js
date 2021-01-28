import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../themes/Colors';

const ListBook = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.layoutRelated}>
        <Text style={styles.titleRelated}>Sách tương tự</Text>
        <TouchableOpacity onPress={() => props.onFilter()}>
          <Text style={styles.textViewMore}>xem hết</Text>
        </TouchableOpacity>
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
