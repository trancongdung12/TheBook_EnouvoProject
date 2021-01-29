import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import OrderItem from '../../components/OrderItem';
import TitleHeader from '../../components/TitleHeader';
const { width } = Dimensions.get('window');
const Orders = () => {
  return (
    <View>
      <TitleHeader title={'Danh sách đơn hàng'} rightIcon={'filter'} />
      <ScrollView style={styles.container}>
        <View style={styles.bodyOrders}>
          <OrderItem
            checkStatus={true}
            code="Q4IJFNHX"
            status="Đã trả"
            dateReturn="20-08-2018"
            priceReturn="200.000"
            dateBorrowed="30-08-2018"
          />
          <OrderItem
            checkStatus={false}
            code="Q4IJFNHXS"
            status="Chưa trả"
            dateReturn="10-08-2018"
            priceReturn="100.000"
            dateBorrowed="23-08-2018"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  bodyOrders: {
    width: width,
  },
});
export default Orders;
