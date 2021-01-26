import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { introScreen } from '../../navigation/pushScreen';
import ItemBoook from '../../components/itemBoook';
const Home = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutItem}>
        <ItemBoook />
      </View>
      <View style={styles.layoutItem}>
        <ItemBoook />
      </View>
      <View style={styles.layoutItem}>
        <ItemBoook />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
  },
  layoutItem: {
    marginTop: 20,
  },
  btnNavigation: {
    width: 150,
    height: 40,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
