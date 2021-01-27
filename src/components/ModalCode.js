import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default function ModalCode(props) {
  const [alertVisible, setAlertVisible] = useState(true);
  const closeModel = () => {
    setAlertVisible(false);
    props.closeModalMain();
  };
  return (
    <View style={styles.centerView}>
      <Modal animationType="slide" transparent={true} visible={alertVisible}>
        <View>
          <View style={styles.modalView}>
            <View style={styles.layoutButtonOne}>
              <TouchableOpacity style={styles.qrCode} onPress={() => closeModel()}>
                <Image style={styles.qrCodeImg} source={{ uri: props.imgQRCode }} />
                <Text style={styles.qrCodeText}>{props.textQRCode}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    marginTop: (windowHeight - 400) / 2,
    alignSelf: 'center',
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
    paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  qrCode: {
    paddingHorizontal: 10,
  },
  qrCodeImg: {
    width: 200,
    height: 200,
  },
  qrCodeText: {
    textAlign: 'center',
    marginTop: 15,
  },
});
