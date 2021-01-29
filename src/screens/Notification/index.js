import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import TitleHeader from '../../components/TitleHeader';

const { width } = Dimensions.get('window');
const Notification = () => {
  return (
    <View>
      <TitleHeader title={'Danh sách đơn hàng'} rightIcon={'filter'} />
      <ScrollView style={styles.container}>
        <View style={styles.bodyNotification}>
          <NotificationItem icon="ic-book" time="20/05/2000" title="Mượn Sách" content="" />
          <NotificationItem icon="ic-sale" time="20/05/2000" title="Khuyến Mãi" content="" />
          <NotificationItem
            icon="ic-notification-1"
            time="20/05/2000"
            title="Thông Báo"
            content=""
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Notification;
const styles = StyleSheet.create({
  container: { width: width },
  bodyNotification: {
    paddingHorizontal: (7 * width) / 100,
    marginTop: (10 * width) / 100,
    marginBottom: (10 * width) / 100,
    width: width - 2 * ((7 * width) / 100),
  },
});
