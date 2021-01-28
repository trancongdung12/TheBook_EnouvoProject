import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../../themes/Colors';
import { useDispatch } from 'react-redux';
import LoginTypes from '../../redux/AuthRedux/Login/actions';

const windowWidth = Dimensions.get('window').width;
const Item = (props) => {
  return (
    <TouchableOpacity style={styles.itemSetting} onPress={props.onPressEvent}>
      <Icon name={props.icon} size={25} color={colors.txtLevel3} />
      <View style={styles.layoutSetting}>
        <Text style={styles.textSetting}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Setting = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Item icon="ic-profile" value="Thông tin cá nhân" />
      <Item icon="ic-password" value="Đổi mật khẩu" />
      <Item icon="ic-help" value="Hỗ trợ" />
      <Item icon="ic-feedback" value="Phản đối" />
      <Item icon="ic-regulation" value="Quy định" />
      <Item icon="ic-history-membership" value="Lịch sử nâng cấp thành viên" />
      <Item icon="ic-share" value="Chia sẻ" />
      <Item
        icon="ic-sign-out"
        value="Đăng xuất"
        onPressEvent={() => dispatch(LoginTypes.userLogout())}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemSetting: {
    flexDirection: 'row',
    marginTop: 20,
  },
  layoutSetting: {
    borderBottomColor: colors.txtLevel2,
    borderBottomWidth: 1,
    marginLeft: 15,
    width: windowWidth - 75,
  },
  textSetting: {
    color: colors.txtLevel3,
    fontSize: 16,
    paddingBottom: 15,
  },
});
