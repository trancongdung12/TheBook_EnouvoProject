/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../themes/Colors';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Book from '../../components/ItemBookHorizontal';
import AlertMessage from '../../components/AlertMessage';
import TitleHeader from '../../components/TitleHeader';
import { homeScreen } from '../../navigation/pushScreen';
import Payments from '../../components/Payments';
const windowWidth = Dimensions.get('window').width;

const Cart = (props) => {
  const data = useSelector((state) => state.carts.responseGetCart.data.items);
  const [model, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  var qtyBook = 5;
  var isOutStock = false;
  if (qtyBook === 0) {
    isOutStock = true;
  }
  const onBackLayout = () => {
    homeScreen();
  };
  return (
    <View style={styles.container}>
      <TitleHeader
        title={'Giỏ hàng'}
        leftIcon={'ic-back'}
        rightIcon={'ic-trash'}
        type={'delete'}
        onBackLayout={onBackLayout}
      />
      {model && (
        <Payments
          isTwoBtn={false}
          title="Thông tin khách hàng"
          textFirstBtn="Xác nhận"
          closeModalMain={closeModal}
        />
      )}
      <ScrollView style={model && { opacity: 0.3 }}>
        <View style={styles.containCart}>
          {data.map((item, index) => {
            return (
              <Book
                key={index}
                title={item.book.title}
                author={item.book.authors[0].name}
                price={item.book.price}
                qtyBook={item.book.quantity}
                image={item.book.medias[0]}
                rating={item.book.overallStarRating}
              />
            );
          })}
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
