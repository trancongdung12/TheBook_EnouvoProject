import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../../themes/Colors';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Filter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layoutHeader}>
        <View style={styles.itemType}>
          <Text style={styles.textType}>Thể loại</Text>
          <Icon name="filter" color={colors.txtLevel3} size={15} />
        </View>
        <View style={styles.itemType}>
          <Text style={styles.textType}>Thể loại</Text>
          <Icon name="select" color={colors.txtLevel3} size={15} />
        </View>
        <View style={styles.itemFilterChange}>
          <Icon name="ic-filter-change" color={colors.txtLevel3} size={15} />
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutHeader: {
    flexDirection: 'row',
  },
  itemType: {
    flexDirection: 'row',
    borderColor: colors.txtLevel2,
    borderWidth: 1,
    justifyContent: 'space-around',
    padding: 8,
    width: (windowWidth - 32) / 2,
  },
  itemFilterChange: {
    flexDirection: 'row',
    borderColor: colors.txtLevel2,
    borderWidth: 1,
    justifyContent: 'space-around', 
    padding: 8,
  },
});
