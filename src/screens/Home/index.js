import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { introScreen } from '../../navigation/pushScreen';
import ItemBoook from '../../components/itemBoook';
import ListBook from '../../components/ListBook';
const data = {
  readMore: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
};

const Home = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {data.readMore.map((item, index) => {
            return <ItemBoook />;
          })}
        </ScrollView>
      </View>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {data.readMore.map((item, index) => {
            return <ItemBoook />;
          })}
        </ScrollView>
      </View>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {data.readMore.map((item, index) => {
            return <ItemBoook />;
          })}
        </ScrollView>
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
    marginTop: 23,
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
