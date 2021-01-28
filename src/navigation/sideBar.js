import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const sideBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layoutTop}>
        <TextInput style={styles.inputSideMenu} placeholder="Tìm thể loại" />
        <Icon style={styles.iconSearch} name="ic-search" />
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Kinh tế</Text>
        <Icon name="ic-more-filter" />
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Chính trị</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Văn hoá</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Xã hội</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Khoa học</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Thể thao</Text>
        <Icon name="ic-more-filter" />
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Tự nhiên</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Truyện tranh</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Tôn giáo</Text>
      </View>
      <View style={styles.layoutItem}>
        <Text style={styles.txtItem}>Lich sử</Text>
        <Icon name="ic-more-filter" />
      </View>
    </View>
  );
};

export default sideBar;

const styles = StyleSheet.create({
  container: {
    width: (width / 7) * 5,
    height: height + 45,
    backgroundColor: '#fff',
  },
  layoutTop: {
    marginTop: 10,
  },
  inputSideMenu: {
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
    padding: 20,
  },
  iconSearch: {
    fontSize: 16,
    marginLeft: (width / 7) * 5 - 40,
    color: '#5f5f5f',
    marginTop: -30,
  },
  layoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
    paddingLeft: 25,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 25,
  },
  txtItem: {
    fontSize: 15,
    fontWeight: '300',
    color: '#4a4a4a',
  },
});
