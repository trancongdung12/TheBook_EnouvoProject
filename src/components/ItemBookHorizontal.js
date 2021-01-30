import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
import Star from './ItemStar';
import book from '../assets/book.jpg';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
// create a component
const Book = (props) => {
  return (
    <View style={styles.itemBook}>
      <View style={styles.layoutBook}>
        <Image style={styles.imgBook} source={{ uri: props.image }} />
        <View style={styles.infoBook}>
          <Text style={styles.titleBook} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.authorBook}>{props.author}</Text>
          <View style={styles.starCommentBook}>
            <Star star={props.rating} />
            <Text style={styles.commentCount}>{props.rating}</Text>
          </View>
          <View style={styles.layoutStock}>
            <View style={styles.itemStock}>
              <Icon name="ic-book-1" size={15} color={colors.primary} />
              <Text style={[styles.textStock, props.isOutStock && { color: colors.primary }]}>
                {props.isOutStock ? 'hết sách' : props.qtyBook + ' quyển sách'}
              </Text>
            </View>
            <View style={styles.itemStock}>
              <Icon name="ic-price" size={15} color={colors.primary} />
              <Text style={styles.textStock}>{props.price}</Text>
            </View>
          </View>
        </View>
      </View>
      {props.hideClose ? <View /> : <Icon name="ic-delete" size={13} color={colors.txtLevel2} />}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  itemBook: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutBook: {
    flexDirection: 'row',
  },
  imgBook: {
    height: 130,
    width: 90,
    borderRadius: 5,
  },
  infoBook: {
    marginLeft: 15,
    width: windowWidth - 180,
  },
  titleBook: {
    fontSize: 16,
    color: colors.txtLevel1,
  },
  authorBook: {
    fontSize: 12,
    color: colors.txtLevel2,
  },
  starCommentBook: {
    flexDirection: 'row',
    marginTop: 3,
  },
  commentCount: {
    fontSize: 10,
    color: colors.txtLevel2,
    marginLeft: 4,
  },
  layoutStock: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemStock: {
    flexDirection: 'row',
  },
  textStock: {
    fontSize: 13,
    color: colors.txtLevel2,
    marginLeft: 4,
  },
});
export default Book;
