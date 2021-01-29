import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
import Star from './ItemStar';
import book from '../assets/book.jpg';

const ItemComment = (props) => {
  return (
    <View style={styles.layoutItemComment}>
      <View style={styles.itemComment}>
        <View style={styles.profileComment}>
          <Image style={styles.avtComment} source={book} />
          <View style={styles.containStarComment}>
            <Text style={styles.nameComment}>{props.name}</Text>
            <View style={styles.layoutStarComment}>
              <Star star={props.starSize} />
            </View>
          </View>
        </View>
        {props.isUser ? (
          <View style={styles.layoutHandleComment}>
            <TouchableOpacity onPress={() => props.openUpdate(props.idReview)}>
              <Icon name="ic-edit-comment" size={20} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.showAlert(props.idReview)}>
              <Icon name="ic-trash" style={{ marginLeft: 13 }} size={20} color="red" />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>
      <Text style={styles.contentComment}>{props.content}</Text>
    </View>
  );
};

export default ItemComment;

const styles = StyleSheet.create({
  itemComment: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileComment: {
    flexDirection: 'row',
  },
  avtComment: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  containStarComment: {
    marginLeft: 8,
  },
  layoutStarComment: {
    flexDirection: 'row',
  },
  layoutHandleComment: {
    flexDirection: 'row',
  },
  contentComment: {
    fontSize: 12,
    color: colors.txtLevel3,
    marginTop: 4,
  },
});
