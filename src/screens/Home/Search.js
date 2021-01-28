import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Navigation } from 'react-native-navigation';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Search = (props) => {
  const backClose = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnClose} onPress={backClose}>
        <Icon name="ic-delete" color="#5f5f5f" />
      </TouchableOpacity>
      <View style={styles.txtInSearch}>
        <TextInput style={styles.txtIpSearch} placeholder="Hãy nhập tên sách mà bạn muốn tìm!" />
        <Icon style={styles.icSearch} name="ic-search" />
      </View>
      <View style={styles.layoutTitle}>
        <Text style={styles.txtTitle}>Các từ khoá thông dụng</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Kiếm hiệp</Text>
        <Text style={styles.txtItem}>Chiến thuật</Text>
        <Text style={styles.txtItem}>Tây Du</Text>
        <Text style={styles.txtItem}>Quora và cộng đồng</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    width: width,
    height: height,
  },
  btnClose: {
    fontSize: 25,
    color: '#5f5f5f',
  },
  txtInSearch: {
    marginTop: 15,
  },
  icSearch: {
    width: 15,
    marginLeft: width - 80,
    marginTop: -25,
    color: '#5f5f5f',
  },
  layoutTitle: {
    marginTop: 12,
  },
  txtTitle: {
    color: '#ababab',
    fontSize: 12,
    fontWeight: '300',
  },
  layoutItem: {
    marginTop: 15,
  },
  txtItem: {
    color: '#4a4a4a',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 8,
  },
});
