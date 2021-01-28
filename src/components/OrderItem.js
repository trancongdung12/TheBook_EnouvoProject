import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import Colors from '../themes/Colors';
const { width } = Dimensions.get('window');
const OrderItem = (props) => {
  return (
    <View style={styles.itemOrders}>
      <View style={styles.contentItemOrders}>
        <View style={styles.leftItemOrder}>
          <Text style={styles.txtLeft1}>10</Text>
          <Text style={styles.txtLeft2}>Apr</Text>
          <Text style={styles.txtLeft3}>2018</Text>
        </View>
        <View style={styles.rightItemOrder}>
          <View style={styles.viewRight}>
            <Icons name="ic-code" style={styles.iconCode} />
            <Text style={styles.txtCodes}>{props.code}</Text>
            <View style={styles.statusOrders}>
              <View style={props.checkStatus ? styles.nodeStatus : styles.nodeStatuses} />
              <Text style={props.checkStatus ? styles.txtStatus : styles.txtStatuses}>
                {props.status}
              </Text>
            </View>
          </View>
          <View style={styles.viewRight}>
            <Icons name="ic-price-1" style={styles.iconPrice} />
            <Text style={styles.txtPrice}>{props.priceReturn}</Text>
          </View>
          <View style={styles.viewRight}>
            <Text style={styles.txtOntime}>Hạn trả:</Text>
            <Text style={styles.txtDateTime}>{props.dateReturn}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemOrders: {
    marginLeft: (7 * width) / 100,
    marginRight: (7 * width) / 100,
    marginTop: 20,
    height: (35 * width) / 100,
    width: width - ((7 * width) / 100) * 2,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
  contentItemOrders: {
    flexDirection: 'row',
    marginTop: (4 * width) / 100,
    marginBottom: (4 * width) / 100,
    height: (35 * width) / 100 - ((4 * width) / 100) * 2,
  },
  leftItemOrder: {
    width: (20 * width) / 100,
    borderRightWidth: 1,
    borderColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLeft1: { fontSize: (5 * width) / 100, color: Colors.waterBlueTwo },
  txtLeft2: { fontSize: (6 * width) / 100, color: Colors.waterBlueTwo, fontWeight: 'bold' },
  txtLeft3: { fontSize: (5 * width) / 100, color: Colors.waterBlueTwo },
  viewRight: {
    marginLeft: (3 * width) / 100,
    marginBottom: (5 * width) / 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCode: {
    fontSize: (5 * width) / 100,
    color: Colors.primary,
  },
  iconPrice: {
    fontSize: (5 * width) / 100,
    color: Colors.primary,
  },
  txtCodes: {
    marginLeft: (2 * width) / 100,
    fontSize: (4 * width) / 100,
    fontWeight: '600',
  },
  txtOntime: {
    fontSize: (3 * width) / 100,
    color: Colors.txtLevel3,
  },
  txtDateTime: {
    marginLeft: (2 * width) / 100,
    fontSize: (3 * width) / 100,
    color: Colors.txtLevel3,
  },
  txtPrice: {
    marginLeft: (2 * width) / 100,
    fontSize: (3 * width) / 100,
    color: Colors.txtLevel3,
  },
  statusOrders: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: (10 * width) / 100,
  },
  nodeStatus: {
    width: (2 * width) / 100,
    height: (2 * width) / 100,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
  },
  txtStatus: {
    marginLeft: (2 * width) / 100,
    fontSize: (4 * width) / 100,
    fontWeight: '300',
    color: Colors.secondary,
  },
  nodeStatuses: {
    width: (2 * width) / 100,
    height: (2 * width) / 100,
    borderRadius: 50,
    backgroundColor: '#73c700',
  },
  txtStatuses: {
    marginLeft: (2 * width) / 100,
    fontSize: (4 * width) / 100,
    fontWeight: '300',
    color: '#73c700',
  },
});
export default OrderItem;
