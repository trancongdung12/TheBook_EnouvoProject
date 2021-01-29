import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../themes/Colors';
import AlertMessage from '../../components/AlertMessage';
const { width } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '../../redux/UserRedux/actions';
const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');
  const [modal, setModal] = useState(false);
  //
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //
  const closeModal = () => {
    setModal(false);
  };
  const onChangePassword = () => {
    const dataChangePass = {
      idUser: user.data.id,
      currentPassword: password,
      password: newPassword,
      confirmedPassword: newPasswordAgain,
    };
    if (dataChangePass.confirmedPassword !== dataChangePass.password) {
      setModal(true);
    } else {
      dispatch(UserActions.userChangePassword(dataChangePass));
    }
  };
  const checkLoading = user.loading;
  const checkError = user.error;
  const checkSuccess = user.dataChangePass;
  return (
    <ScrollView style={styles.containers}>
      {modal && (
        <AlertMessage
          isTwoBtn={false}
          title="Mật khẩu của bạn không trùng !"
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      {checkError && (
        <AlertMessage
          isTwoBtn={false}
          title={checkError.data.message}
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      {checkSuccess && (
        <AlertMessage
          isTwoBtn={false}
          title={checkSuccess.data.message}
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      <View style={styles.bodyChangePass}>
        <View style={styles.contentChangePass}>
          <View style={styles.itemChangePass}>
            <Text style={styles.txtTitleChangePass}>Mật khẩu hiện tại</Text>
            <TextInput
              style={styles.txtChangePass}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.itemChangePass}>
            <Text style={styles.txtTitleChangePass}>Mật khẩu mới</Text>
            <TextInput
              style={styles.txtChangePass}
              secureTextEntry={true}
              onChangeText={(text) => setNewPassword(text)}
            />
          </View>
          <View style={styles.itemChangePass}>
            <Text style={styles.txtTitleChangePass}>Nhập lại mật khẩu</Text>
            <TextInput
              style={styles.txtChangePass}
              secureTextEntry={true}
              onChangeText={(text) => setNewPasswordAgain(text)}
            />
          </View>
        </View>
        {checkLoading && <ActivityIndicator size="small" color="#0000ff" />}
        <View style={styles.bottomChangePass}>
          <TouchableOpacity style={styles.btnChangePass} onPress={() => onChangePassword()}>
            <Text style={styles.txtBtnChangePass}>Xác nhận</Text>
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
  bodyChangePass: {
    margin: (10 * width) / 100,
    width: width - (25 * width) / 100,
    alignSelf: 'center',
  },
  contentChangePass: {
    width: '100%',
  },
  itemChangePass: {
    width: '100%',
    marginTop: 15,
  },
  txtTitleChangePass: {
    fontWeight: '400',
    fontSize: 15,
    color: Colors.btnLevel2,
  },
  txtChangePass: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel3,
    height: 35,
    borderRadius: 5,
    fontSize: 13,
    paddingLeft: 10,
    marginTop: 5,
  },
  bottomChangePass: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnChangePass: {
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 50,
  },
  txtBtnChangePass: {
    fontSize: 15,
    color: 'white',
  },
});
export default ChangePassword;
