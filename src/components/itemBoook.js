import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import book from '../assets/book.jpg';
import colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';

const itemBoook = (props) => {
  return (
    <View style={styles.sliderRelated}>
      <View style={styles.bookRelated}>
        <Image style={styles.bookRelatedImg} source={{ uri: props.image }} />
        <Text style={styles.titleBookRelated} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.authorBookRelated}>{props.authors}</Text>
        <View style={styles.layoutStar}>
          <View style={styles.layoutStarBookRelated}>
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="ic-star-pre" size={10} color={colors.txtLevel2} />
          </View>
          <Text style={styles.textPriceBookRelated}>{props.price} đ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderRelated: {
    marginTop: 8,
    marginRight: 16,
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

export default itemBoook;
