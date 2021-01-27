import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
export default class SideBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      checked: false,
    };
  }
  onclickCheck = async (name) => {r
    const { checked } = this.state;
    if (checked) {
      await this.setState({
        value: name,
        checked: false,
      });
    } else {
      await this.setState({
        value: name,
        checked: true,
      });
    }

    this.props.onclickCheck(this.state.value);
  };
  render() {
    const { name } = this.props;
    const { checked } = this.state;
    return (
      // <TouchableOpacity
      //   onPress={() => {
      //     this.onclickCheck(name);
      //   }}
      // >
      //   <View style={[styles.dropDownChild]}>
      //     <Text style={styles.text}>{name}</Text>
      //     <View style={styles.Check}>
      //       <Icon name="ic-check" solid size={35} color="#fc9619" />
      //     </View>
      //   </View>
      // </TouchableOpacity>
      <View style={{width:100,height:100}} >
        <Text>ttttttttt</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    flex: 1,
  },
  dropDownChild: {
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
    width: 500,
    flexDirection: 'row',
    backgroundColor: '#5555',
  },
  Check: {
    flex: 1,
    opacity: 0,
  },
  checked: {
    opacity: 1,
  },
});
