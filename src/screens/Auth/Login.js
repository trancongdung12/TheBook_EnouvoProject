import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import { pushScreen } from '../../navigation/pushScreen';
import Colors from '../../themes/Colors';
import Input from '../../components/TextInput';
import ButtonDefault from '../../components/ButtonDefault';
const { width } = Dimensions.get('window');
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onRegister = () => {
    pushScreen(props.componentId, 'Register', '', '', false);
  };
  const onLogin = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <ScrollView>
      <View style={styles.bodyLogin}>
        <View style={styles.headerLogin}>
          <Icons name="ic-delete" style={styles.iconDelete} />
          <Text style={styles.txtTitle}>Login</Text>
        </View>
        <View style={styles.contentLogin}>
          <Input
            title="Tài Khoản"
            name="Nhập Tài Khoản"
            txtChange={(text) => setEmail(text)}
            typeInput="emailAddress"
            secureTextEntry={false}
          />
          <Input
            title="Mật khẩu"
            name="Nhập Nhập mật khẩu"
            txtChange={(text) => setPassword(text)}
            typeInput="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.bottomLogin}>
          <ButtonDefault checkButton={true} title="Đăng nhập" onSubmit={onLogin} />
          <ButtonDefault checkButton={false} title="Đăng kí"  onSubmit={onRegister} />
        </View>
        <TouchableOpacity style={styles.btnForgot}>
          <Text style={styles.txtForgot}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bodyLogin: {
    width: width,
  },
  headerLogin: {
    marginTop: 23.25,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDelete: {
    fontSize: 15,
    color: Colors.greyishBrown,
    marginLeft: 23.25,
  },
  txtTitle: {
    width: width - 60,
    textAlign: 'center',
    fontSize: 30,
    color: Colors.greyishBrown,
    fontWeight: '600',
  },
  contentLogin: {
    marginTop: 22.5,
    marginLeft: 20,
    marginRight: 20,
  },
  bottomLogin: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  btnForgot: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    color: Colors.txtLevel3,
  },
});
export default Login;
