import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import NotificationItem from '../../components/NotificationItem';

const { width } = Dimensions.get('window');
const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyNotification}>
        <NotificationItem icon="ic-book" time="20/05/2000" title="Mượn Sách" content="" />
        <NotificationItem icon="ic-sale" time="20/05/2000" title="Khuyến Mãi" content="" />
        <NotificationItem icon="ic-notification-1" time="20/05/2000" title="Thông Báo" content="" />
      </View>
    </ScrollView>
  );
};
export default Notification;
const styles = StyleSheet.create({
  container: { width: width },
  bodyNotification: {
    margin: (10 * width) / 100,
    width: width - 2 * ((10 * width) / 100),
  },
});