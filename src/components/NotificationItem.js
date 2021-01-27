import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../themes/Colors';
import Icons from 'react-native-vector-icons/thebook-appicon';
const { width } = Dimensions.get('window');
const NotificationItem = (props) => {
  return (
    <View style={styles.itemNotification}>
      <View style={styles.iconNotification}>
        <Icons name={props.icon} style={styles.icons} />
      </View>
      <View style={styles.contentNotification}>
        <View style={styles.titleContent}>
          <Text style={styles.titleNotification}>{props.title}</Text>
          <Text style={styles.dateContent}>{props.time}</Text>
        </View>
        <Text style={styles.detailNotification}>
          {props.content}
          Bạn đã quá hạn mượn sách 3 ngày, vui lòng gia hạn thêm hoặc mang sách đến trả tại cửa hàng
          gần nhất.
        </Text>
      </View>
    </View>
  );
};
export default NotificationItem;
const styles = StyleSheet.create({
  itemNotification: {
    flexDirection: 'row',
    marginBottom: (7 * width) / 100,
  },
  iconNotification: {
    width: (15 * width) / 100,
    height: (15 * width) / 100,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: (5 * width) / 100,
  },
  icons: {
    fontSize: (9 * width) / 100,
  },
  titleContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleNotification: {
    fontSize: (5 * width) / 100,
    fontWeight: 'bold',
  },
  dateContent: {
    textAlign: 'right',
    fontSize: (2.5 * width) / 100,
    color: Colors.txtLevel3,
    marginLeft: (25 * width) / 100,
  },
  detailNotification: {
    width: width - (2 * ((10 * width) / 100) + ((10 * width) / 100 + (5 * width) / 100)),
    fontSize: (4 * width) / 100,
    color: Colors.txtLevel3,
  },
});
