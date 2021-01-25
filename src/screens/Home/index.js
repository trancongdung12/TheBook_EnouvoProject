
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { loginScreen } from '../../navigation/pushScreen';
const Home = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnNavigation} onPress={() => loginScreen()}>
        <Text style={styles.txtNavigation}>MyComponent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
