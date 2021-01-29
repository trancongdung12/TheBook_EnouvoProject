import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { useDispatch } from 'react-redux';
import DetailActions from '../redux/DetailRedux/actions';
import ItemStar from './ItemStar';

const ItemBook = (props) => {
  return (
    <TouchableOpacity style={styles.sliderRelated} onPress={() => props.onDetailBook(props.idBook)}>
      <View style={styles.bookRelated}>
        <Image style={styles.bookRelatedImg} source={{ uri: props.image }} />
        <Text style={styles.titleBookRelated} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.authorBookRelated}>{props.authors}</Text>
        <View style={styles.layoutStar}>
          <ItemStar star={props.rating} />
          <Text style={styles.textPriceBookRelated}>{props.price} đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sliderRelated: {
    marginTop: 8,
    marginRight: 20,
  },
  bookRelatedImg: {
    height: 165,
    width: 115,
  },
  titleBookRelated: {
    fontSize: 14,
    color: colors.txtLevel1,
    marginTop: 8,
    width: 120,
  },
  authorBookRelated: {
    color: colors.txtLevel2,
    fontSize: 12,
  },
  layoutStar: {
    flexDirection: 'row',
  },
  layoutStarBookRelated: {
    flexDirection: 'row',
  },
  textPriceBookRelated: {
    fontSize: 10,
    marginLeft: 8,
    color: colors.txtLevel2,
  },
});

export default ItemBook;
