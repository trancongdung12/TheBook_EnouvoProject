/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import book from '../../assets/book.jpg';
import colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
import AlertMessage from '../../components/AlertMessage';
const Detail = () => {
  const [isMore, setIsMore] = useState(false);
  const [model, setModal] = useState(false);
  const description =
    'Kimi no Na wa là tác phẩm điện ảnh mới của đạo diễn Makoto Shinkai (đạo diễn 5cm/s, The Garden of Words, Voices of a Distant Star). Mitsuha - cô nữ sinh sống tại một vùng quê Nhật Bản, chán ngán cuộc sống hiện tại và luôn mong';

  return (
    <ScrollView style={styles.container}>
      {model && <AlertMessage />}
      <View style={styles.layoutDetail}>
        <Image style={styles.bookImg} source={book} />
        <Text style={styles.bookTitle}>Để con được ốm thêm vài lần</Text>
        <Text style={styles.bookAuthor}>Nguyễn Trí Đoàn</Text>
        <View style={styles.layoutStarPrice}>
          <View style={styles.layoutStar}>
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="star" size={10} color={colors.primary} />
            <Icon name="ic-star-pre" size={10} color={colors.txtLevel2} />
          </View>
          <View style={styles.layoutPrice}>
            <Icon name="ic-price" size={10} color={colors.primary} />
            <Text style={styles.textPrice}>1.278</Text>
          </View>
        </View>
        <View style={styles.layoutTag}>
          <View style={styles.itemTag}>
            <Text style={styles.textTag}>tình cảm</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.textTag}>đời sống</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.textTag}>học đường</Text>
          </View>
        </View>
        <View style={styles.layoutDescription}>
          <Text numberOfLines={isMore ? 10 : 3} style={styles.textDescription}>
            {description}
          </Text>
          <TouchableWithoutFeedback onPress={() => setIsMore({ isMore: true })}>
            <Text style={styles.textViewMore}> {isMore ? '' : 'xem hết'}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.layoutRelated}>
          <Text style={styles.titleRelated}>Sách tương tự</Text>
          <Text style={styles.textViewMore}>xem hết</Text>
        </View>
        <View style={styles.sliderRelated}>
          <View style={styles.bookRelated}>
            <Image style={styles.bookRelatedImg} source={book} />
            <Text style={styles.titleBookRelated}>Để con được ốm</Text>
            <Text style={styles.authorBookRelated}>Nguyễn Trí Hoàn</Text>
            <View style={styles.layoutStar}>
              <View style={styles.layoutStarBookRelated}>
                <Icon name="star" size={10} color={colors.primary} />
                <Icon name="star" size={10} color={colors.primary} />
                <Icon name="star" size={10} color={colors.primary} />
                <Icon name="star" size={10} color={colors.primary} />
                <Icon name="ic-star-pre" size={10} color={colors.txtLevel2} />
              </View>
              <Text style={styles.textPriceBookRelated}>1,278</Text>
            </View>
          </View>
        </View>
        <View style={styles.layoutComment}>
          <Text style={styles.titleComment}>Nhận xét</Text>
          <TouchableOpacity style={styles.btnComment}>
            <Text style={styles.textButtonComment}>Viết nhận xét cho cuốn sách này</Text>
          </TouchableOpacity>
          <View style={styles.layoutItemComment}>
            <View style={styles.itemComment}>
              <View style={styles.profileComment}>
                <Image style={styles.avtComment} source={book} />
                <View style={styles.containStarComment}>
                  <Text style={styles.nameComment}>Kim Dung</Text>
                  <View style={styles.layoutStarComment}>
                    <Icon name="star" size={10} color={colors.primary} />
                    <Icon name="star" size={10} color={colors.primary} />
                    <Icon name="star" size={10} color={colors.primary} />
                    <Icon name="star" size={10} color={colors.primary} />
                    <Icon name="ic-star-pre" size={10} color={colors.txtLevel2} />
                  </View>
                </View>
              </View>
              <View style={styles.layoutHandleComment}>
                <Icon name="ic-edit-comment" size={15} color={colors.txtLevel2} />
                <Icon
                  name="ic-trash"
                  style={{ marginLeft: 13 }}
                  size={15}
                  color={colors.txtLevel2}
                />
              </View>
            </View>
            <Text style={styles.contentComment}>
              Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi
              hoài mà nó không đủ 3 dòng, mệt.
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAllComment}>Xem tất cả nhân xét</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.btnAddToCart} onPress={() => setModal(true)}>
        <Text style={styles.textAddToCart}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutDetail: {
    paddingHorizontal: 15,
  },
  bookImg: {
    alignSelf: 'center',
    height: 195,
    width: 135,
  },
  bookTitle: {
    fontSize: 16,
    color: colors.txtLevel1,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '600',
  },
  bookAuthor: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.txtLevel2,
    marginTop: 2,
  },
  layoutStarPrice: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 4,
  },
  layoutStar: {
    flexDirection: 'row',
  },
  layoutPrice: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textPrice: {
    marginLeft: 4,
    fontSize: 12,
    color: colors.txtLevel2,
    marginTop: -2,
  },
  layoutTag: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 8,
  },
  itemTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderColor: colors.txtLevel2,
    borderWidth: 1,
    marginLeft: 8,
  },
  textTag: {
    fontSize: 10,
    color: colors.txtLevel2,
    textAlign: 'center',
  },
  layoutDescription: {
    marginTop: 15,
  },
  textDescription: {
    fontSize: 12,
    color: colors.txtLevel3,
  },
  textViewMore: {
    color: colors.secondary,
  },
  layoutRelated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRelated: {
    fontSize: 16,
  },
  sliderRelated: {
    marginTop: 8,
  },
  bookRelatedImg: {
    height: 165,
    width: 115,
  },
  titleBookRelated: {
    fontSize: 14,
    color: colors.txtLevel1,
    marginTop: 8,
  },
  authorBookRelated: {
    color: colors.txtLevel2,
    fontSize: 12,
  },
  layoutStarBookRelated: {
    flexDirection: 'row',
  },
  textPriceBookRelated: {
    fontSize: 10,
    marginLeft: 8,
    color: colors.txtLevel2,
  },
  layoutComment: {
    marginTop: 15,
  },
  titleComment: {
    fontSize: 16,
    color: colors.txtLevel1,
  },
  btnComment: {
    marginTop: 12,
    borderColor: colors.waterBlueTwo,
    borderWidth: 1,
    paddingVertical: 9,
  },
  textButtonComment: {
    textAlign: 'center',
    color: colors.waterBlueTwo,
  },
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
  viewAllComment: {
    marginTop: 12,
    textAlign: 'center',
    color: colors.waterBlueTwo,
  },
  btnAddToCart: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  textAddToCart: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Detail;
