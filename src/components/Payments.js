import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import colors from '../themes/Colors';
import OrderActions from '../redux/OrderRedux/actions';
import { useDispatch, useSelector } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Payments(props) {
  // state
  const [alertVisible, setAlertVisible] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [address, setAddress] = useState(user.data.address);
  const [message, setMessage] = useState('Gi chú !');
  // function

  const closeModel = () => {
    setAlertVisible(false);
    props.closeModalMain();
  };

  // order books
  const onOrderBooks = () => {
    setAlertVisible(false);
    const dataOrders = {
      shippingAddress: address,
      shippingRequired: true,
      note: message,
      userId: user.data.id,
    };
    dispatch(OrderActions.userOrderBooks(dataOrders));
    props.closeModalMain();
  };
  // render
  return (
    <ScrollView>
      <View style={styles.centerView}>
        <Modal animationType="slide" transparent={true} visible={alertVisible}>
          <View>
            <View style={styles.modalView}>
              <Text style={styles.textStyles}>{props.title}</Text>
              <TextInput
                placeholder={address}
                style={styles.txtInformation}
                onChangeText={(text) => setAddress(text)}
              />
              <TextInput
                placeholder={message}
                style={styles.txtInformations}
                multiline={true}
                numberOfLines={10}
                onChangeText={(text) => setMessage(text)}
              />
              <View style={styles.layoutButtonOne}>
                <TouchableOpacity style={styles.btnNotification} onPress={() => onOrderBooks()}>
                  <Text style={styles.textNotification}>{props.textFirstBtn}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  modalView: {
    marginTop: windowHeight / 4,
    alignSelf: 'center',
    height: 230,
    width: windowWidth - 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  textStyles: {
    textAlign: 'center',
    color: colors.txtLevel3,
  },
  layoutButtonOne: {
    marginTop: 15,
    alignSelf: 'center',
  },
  btnNotification: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: 120,
    height: 35,
    justifyContent: 'center',
  },
  textNotification: {
    color: 'white',
    textAlign: 'center',
  },
  txtInformation: {
    borderWidth: 1,
    borderColor: colors.btnLevel2,
    height: 37,
    width: windowWidth / 1.3,
    marginTop: 15,
    borderRadius: 5,
  },
  txtInformations: {
    height: 60,
    borderWidth: 1,
    borderColor: colors.btnLevel2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: windowWidth / 1.3,
    marginTop: 15,
    borderRadius: 5,
  },
});
