import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import RadioButton from 'radio-buttons-react-native';
import Colors from '../../themes/Colors';
import ItemInput from '../../components/ItemInputUpdate';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../../components/AlertMessage';
import UserActions from '../../redux/UserRedux/actions';
const EditInfo = () => {
  // use store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // state
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [dateOfBird, setDateOfBird] = useState(null);
  const [gender, setGender] = useState(0);
  const [modal, setModal] = useState(false);

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
  const closeModal = () => {
    setModal(false);
  };
  const onUpadateInfo = () => {
    const dataUpdate = {
      idUser: user.data.id,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
      email: email,
      address: address,
      gender: gender,
      dateOfBirth: dateOfBird,
      position: '',
      totalPoint: 0,
    };
    if (
      dataUpdate.firstName === null ||
      data.lastName === null ||
      data.phoneNumber === null ||
      data.email === null ||
      data.address === null ||
      data.gender === null ||
      data.dateOfBirth === null
    ) {
      setModal(true);
    } else {
      dispatch(UserActions.userUpdateProfile(dataUpdate));
    }
  };
  // check update profile
  const checkLoading = user.loading;
  const checkSuccess = user.dataUpdateProfile;
  const checkFailure = user.errorUpdateProfile;
  return (
    <ScrollView style={styles.container}>
      {modal && (
        <AlertMessage
          isTwoBtn={false}
          title="Bạn cần nhập đầy đủ thông tin !"
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      {checkSuccess && (
        <AlertMessage
          isTwoBtn={false}
          title={checkSuccess.message}
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      {checkFailure && (
        <AlertMessage
          isTwoBtn={false}
          title="Bạn cần nhập đầy đủ thông tin !"
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      <View style={styles.bodyEditInfo}>
        <View style={styles.contentChangePass}>
          <ItemInput
            title="Họ"
            oldData={user.data.lastName}
            onChange={(text) => setLastName(text)}
            value={lastName}
          />
          <ItemInput
            title="Tên"
            oldData={user.data.firstName}
            onChange={(text) => setFirstName(text)}
            value={firstName}
          />
          <ItemInput
            title="Số điện thoại"
            oldData={user.data.phoneNumber}
            onChange={(text) => setPhone(text)}
            value={phone}
          />
          <ItemInput title="Email" oldData={user.data.email} onChange={(text) => setEmail(text)} />
          <ItemInput
            title="Địa chỉ"
            oldData={user.data.address}
            onChange={(text) => setAddress(text)}
            value={address}
          />
          <ItemInput
            title="Ngày Sinh"
            oldData={user.data.dateOfBirth}
            onChange={(text) => setDateOfBird(text)}
            value={dateOfBird}
          />
          <View style={styles.itemChangePass}>
            <Text style={styles.txtTitleChangePass}>Giới tính</Text>
            <View style={styles.inputRadioButton}>
              <RadioButton
                data={data}
                selectedBtn={(e) => setGender(e.value)}
                style={styles.RadioButtons}
                boxStyle={styles.txtRadio}
                textStyle={styles.txtText}
                oldData={gender}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomChangePass}>
          {checkLoading && <ActivityIndicator size="small" color="#0000ff" />}
          <TouchableOpacity style={styles.btnChangePass} onPress={() => onUpadateInfo()}>
            <Text style={styles.txtBtnChangePass}>Cập nhật</Text>
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
