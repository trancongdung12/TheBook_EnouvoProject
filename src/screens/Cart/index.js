/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import colors from '../../themes/Colors';
import { Dimensions } from 'react-native';
import Book from '../../components/ItemBookHorizontal';
import AlertMessage from '../../components/AlertMessage';
import TitleHeader from '../../components/TitleHeader';
const windowWidth = Dimensions.get('window').width;

const Cart = () => {
  const [model, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  var qtyBook = 5;
  var isOutStock = false;
  if (qtyBook === 0) {
    isOutStock = true;
  }
  return (
    <View style={styles.container}>
      <TitleHeader
        title={'Giỏ hàng'}
        leftIcon={'ic-back'}
        rightIcon={'ic-trash'}
        type={'delete'}
        // onBackLayout={onBackLayout}
      />
      {model && (
        <AlertMessage
          isTwoBtn={false}
          title="Sách đã được đặt thành công Bạn có thể theo dõi tại mục cá nhân"
          textFirstBtn="Cám ơn"
          closeModalMain={closeModal}
        />
      )}
      <ScrollView style={model && { opacity: 0.3 }}>
        <View style={styles.containCart}>
          <Book isOutStock={isOutStock} qtyBook={qtyBook} />
          <Book isOutStock={isOutStock} qtyBook={qtyBook} />
          <Book isOutStock={isOutStock} qtyBook={qtyBook} />
          <Book isOutStock={isOutStock} qtyBook={qtyBook} />
          <Book isOutStock={isOutStock} qtyBook={qtyBook} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btnOrderBook} onPress={() => setModal(true)}>
        <Text style={styles.textOrderBook}>Đặt sách</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containCart: {
    paddingHorizontal: 15,
    marginBottom: 50,
  },
  btnOrderBook: {
    backgroundColor: colors.primary,
    width: windowWidth,
    paddingVertical: 10,
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textOrderBook: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Cart;
