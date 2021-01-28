import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import avatar from '../../assets/image/avatar.jpg';
import Icon from 'react-native-vector-icons/thebook-appicon';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/Colors';
import ItemBook from '../../components/ItemBook';
import ModalCode from '../../components/ModalCode';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/UserRedux/actions';
import { pushScreen } from '../../navigation/pushScreen';

const windowWidth = Dimensions.get('window').width;

const Profile = (props) => {
  const [modal, setModal] = useState(false);
  const datas = useSelector((state) => state.bookTypes.responseDataType.data);
  const closeModal = () => {
    setModal(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.userInfo());
  }, []);
  const user = useSelector((state) => state.user.data);
  return (
    <ScrollView style={[styles.container, modal && { opacity: 0.3 }]}>
      {modal && (
        <ModalCode
          imgQRCode={user.qrCodeUrl}
          textQRCode={user.qrCode}
          closeModalMain={closeModal}
        />
      )}
      <View style={styles.headerIcon}>
        <TouchableOpacity>
          <Icon name="ic-photo" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushScreen(props.componentId, 'Setting', '', 'Cài đặt thông tin', true)}
        >
          <Icon name="ic-setting" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Image style={styles.avtProfile} source={avatar} />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0) 11%', 'rgba(37, 36, 36, 0.7) 111%']}
        style={styles.overlay}
      />
      <View style={styles.layoutInfo}>
        <Text style={styles.textName}>{user ? user.fullName : 'No name'}</Text>
        <View style={styles.containInfo}>
          <TouchableOpacity style={styles.layoutPlatinum}>
            <Icon name="ic-titan" size={20} color={colors.platinum} />
            <Text style={styles.textPlatinum}>Platinum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.layoutQRCode} onPress={() => setModal(true)}>
            <Icon name="code" size={30} color={colors.btnLevel2} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutOption}>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.textOption, { color: colors.txtLevel1 }]}>Đang mượn</Text>
          <Text style={[styles.textOption, { color: colors.txtLevel1 }]}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.textOption}>Yêu thích</Text>
          <Text style={styles.textOption}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.textOption}>Tích điểm</Text>
          <Text style={styles.textOption}>12</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutFilter}>
        <Icon name="ic-filter-change-2" size={20} color={colors.btnLevel1} />
        <Icon name="ic-filter-change" size={20} color={colors.btnLevel2} />
      </View>
      <View style={styles.layoutBook}>
        <ScrollView horizontal={true}>
          {datas.map((item, index) => {
            return (
              <ItemBook
                key={index}
                image={item.medias[0]}
                title={item.title}
                authors={item.authors[0].name}
                price={item.price}
                idBook={item.id}
                idComponent={props.componentId}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avtProfile: {
    height: 380,
    width: windowWidth,
    marginTop: -42,
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 100,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  overlay: {
    height: 200,
    opacity: 0.8,
    marginTop: -200,
  },
  layoutInfo: {
    marginTop: -70,
    paddingLeft: 20,
    paddingRight: 40,
  },
  containInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  textName: {
    fontSize: 26,
    color: 'white',
    fontWeight: '700',
  },
  layoutPlatinum: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
  textPlatinum: {
    fontSize: 15,
    marginLeft: 12,
  },
  layoutQRCode: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
  layoutOption: {
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    // alignItems: 'center',
  },
  textOption: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.txtLevel3,
  },
  layoutFilter: {
    marginTop: 26,
    paddingTop: 15,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: colors.txtLevel2,
    borderBottomColor: colors.txtLevel2,
    borderWidth: 1,
  },
  layoutBook: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
