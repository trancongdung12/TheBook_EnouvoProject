import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { loginScreen } from '../../navigation/pushScreen';
import AlertMessage from '../../components/AlertMessage';
const Home = (props) => {
  const [model, setModel] = useState(false);
  return (
    <View style={styles.container}>
      {model && <AlertMessage />}
      <TouchableOpacity style={styles.btnNavigation} onPress={() => setModel(true)}>
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
