import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SignUpTypes from '../../redux/AuthRedux/actions';
// import theme
import { loginScreen } from '../../navigation/pushScreen';
import Icons from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import Inputs from '../../components/TextInput';
import ButtonDefault from '../../components/ButtonDefault';
const { width } = Dimensions.get('window');
const Register = () => {
  // state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passAgain, setPassAgain] = useState('');
  // function
  const dispatch = useDispatch();
  const checkLoadingSignUp = useSelector((state) => state.auth.loading);
  const onRegister = () => {
    if (
      firstName === '' ||
      email === '' ||
      phone === '' ||
      lastName === '' ||
      passAgain === '' ||
      password === ''
    ) {
      // eslint-disable-next-line no-alert
      alert('Bạn phải nhập đầy đủ thông tin!');
    } else if (password !== passAgain) {
      // eslint-disable-next-line no-alert
      alert('Mật khẩu của bạn không khớp !');
    } else {
      const data = {
        firstName: lastName,
        lastName: firstName,
        phoneNumber: phone,
        email: email,
        password: password,
        address: 'space 1 enouvo',
        gender: 0,
        dateOfBirth: '2000-05-20',
      };
      dispatch(SignUpTypes.userSignUp(data));
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyRegister}>
        <View style={styles.headerRegister}>
          <TouchableOpacity onPress={() => loginScreen()} style={styles.btnLogin}>
            <Icons name="ic-delete" style={styles.iconDelete} />
          </TouchableOpacity>
          <Text style={styles.txtTitle}>Đăng Kí</Text>
        </View>
        <View style={styles.contentRegister}>
          <Inputs
            title="Họ*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setFirstName(text)}
            typeInput="emailAddress"
          />
          <Inputs
            title="Tên*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setLastName(text)}
            typeInput="emailAddress"
          />
          <Inputs
            title="Email*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setEmail(text)}
            typeInput="emailAddress"
          />
          <Inputs
            title="Số điện thoại*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setPhone(text)}
            typeInput="emailAddress"
          />
          <Inputs
            title="Mật khẩu*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setPassword(text)}
            typeInput="emailAddress"
            checkPass={true}
          />
          <Inputs
            title="Xác nhận mật khẩu*"
            name="Nhập Tài Khoản"
            txtChange={(text) => setPassAgain(text)}
            typeInput="emailAddress"
            checkPass={true}
          />
        </View>
        {checkLoadingSignUp && <ActivityIndicator size="small" color="#0000ff" />}
        <View style={styles.bottomRegister}>
          <ButtonDefault checkButton={true} title="Đăng Kí" onSubmit={onRegister} />
          <ButtonDefault checkButton={false} title="Đăng nhập" onSubmit={loginScreen} />
        </View>
        <Text style={styles.txtBottom}>
          Bằng việc xác nhận tạo tài khoản bạn đã đồng ý với các quy định của chúng tôi
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  bodyRegister: {
    width: width,
    marginBottom: 25,
  },
  headerRegister: {
    flexDirection: 'row',
    marginTop: 25,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDelete: {
    fontSize: 15,
    color: Colors.greyishBrown,
  },
  txtTitle: {
    width: width - 60,
    textAlign: 'center',
    fontSize: 30,
    color: Colors.greyishBrown,
    fontWeight: '600',
  },
  contentRegister: {
    margin: (8 * width) / 100,
  },
  bottomRegister: {
    flexDirection: 'row',
    marginLeft: (6 * width) / 100,
  },
  txtBottom: {
    marginTop: 15,
    marginLeft: (8.5 * width) / 100,
    marginRight: (8 * width) / 100,
    fontSize: 13,
    color: Colors.txtLevel2,
  },
});
export default Register;
