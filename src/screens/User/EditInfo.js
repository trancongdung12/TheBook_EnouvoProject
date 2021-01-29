import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import RadioButton from 'radio-buttons-react-native';
import Colors from '../../themes/Colors';
import ItemInput from '../../components/ItemInputUpdate';
const EditInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBird, setDateOfBird] = useState('');
  const [gender, setGender] = useState(null);
  const data = [
    {
      label: 'Nam',
      value: 0,
    },
    {
      label: 'Nữ',
      value: 1,
    },
  ];
  const onUpadateInfo = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
      email: email,
      address: address,
      gender: gender,
      dateOfBirth: dateOfBird,
      position: 'string',
      totalPoint: 0,
    };
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyEditInfo}>
        <View style={styles.contentChangePass}>
          <ItemInput title="Họ" onChange={(text) => setLastName(text)} />
          <ItemInput title="Tên" onChange={(text) => setFirstName(text)} />
          <ItemInput title="Số điện thoại" onChange={(text) => setPhone(text)} />
          <ItemInput title="Email" onChange={(text) => setEmail(text)} />
          <ItemInput title="Địa chỉ" onChange={(text) => setAddress(text)} />
          <ItemInput title="Ngày Sinh" onChange={(text) => setDateOfBird(text)} />
          <View style={styles.itemChangePass}>
            <Text style={styles.txtTitleChangePass}>Giới tính</Text>
            <View style={styles.inputRadioButton}>
              <RadioButton
                data={data}
                selectedBtn={(e) => setGender(e)}
                style={styles.RadioButtons}
                boxStyle={styles.txtRadio}
                textStyle={styles.txtText}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomChangePass}>
          <TouchableOpacity style={styles.btnChangePass}>
            <Text style={styles.txtBtnChangePass}>Cập nhậts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containers: {
    width: width,
  },
  bodyEditInfo: {
    margin: (10 * width) / 100,
    width: width - (25 * width) / 100,
    alignSelf: 'center',
    height: height,
  },
  contentChangePass: {
    width: '100%',
  },
  itemChangePass: {
    width: '100%',
    marginTop: 20,
  },
  txtTitleChangePass: {
    fontWeight: '400',
    fontSize: 15,
    color: Colors.btnLevel2,
  },
  bottomChangePass: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnChangePass: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    marginBottom: 50,
  },
  txtBtnChangePass: {
    fontSize: 15,
    color: 'white',
  },
  RadioButtons: {
    flexDirection: 'row',
  },
  txtRadio: {
    width: 100,
    height: 40,
    marginLeft: 10,
  },
  txtText: {
    marginLeft: 10,
    fontSize: 15,
  },
});
export default EditInfo;
