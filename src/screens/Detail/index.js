/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import book from '../../assets/book.jpg';
import colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
import ItemBook from '../../components/ItemBook';
import AlertMessage from '../../components/AlertMessage';
import { useSelector } from 'react-redux';
import Star from '../../components/ItemStar';
import { Navigation } from 'react-native-navigation';
import ListBook from '../../components/ListBook';
import { useDispatch } from 'react-redux';
import CartActions from '../../redux/CartRedux/actions';
import { homeScreen } from '../../navigation/pushScreen';
import AddComment from '../../components/AddComment';
const Detail = (props) => {
  const [isMore, setIsMore] = useState(false);
  const [model, setModal] = useState(false);
  const [modelReview, setModelReview] = useState(false);
  const data = useSelector((state) => state.detail.responseBookDetail);
  const datas = useSelector((state) => state.bookTypes.responseDataType.data);
  const user = useSelector((state) => state.user);
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  // show Alert
  const closeModal = () => {
    setModal(false);
  };
  // add to cart function
  const onAddToCart = () => {
    if (data.availability === 0) {
      setModal(true);
    } else {
      const dataOrder = {
        bookId: data.id,
        quantity: 1,
        userId: user.data.id,
      };
      dispatch(CartActions.userAddCart(dataOrder));
    }
  };
  // push back home screeen
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'back') {
      homeScreen();
    } else if (buttonId === 'cart') {
      dispatch(CartActions.userGetCart());
    }
  });
  // Check loading of add to cart
  // const checkLoadAddCart = carts.loadingAddCart;
  return (
    <ScrollView
      style={[styles.container, model && { opacity: 0.3 }, modelReview && { opacity: 0.3 }]}
    >
      {model && (
        <AlertMessage
          isTwoBtn={true}
          title="Sách này hiện đã được mượn hết Bạn có muốn nhận thông báo ngay khi có lại"
          textFirstBtn="Nhận thông báo"
          textSecondBtn="Không, cảm ơn"
          closeModalMain={closeModal}
        />
      )}
      {carts.addCartError && (
        <AlertMessage
          isTwoBtn={false}
          title="Sản phẩm đã có trong giỏ hàng"
          textFirstBtn="Nhận thông báo"
          closeModalMain={closeModal}
        />
      )}
      {carts.responseAddCart && (
        <AlertMessage
          isTwoBtn={false}
          title="Bạn đã thêm vào giỏ hàng thành công !"
          textFirstBtn="Nhận thông báo"
          closeModalMain={closeModal}
        />
      )}
      {modelReview && <AddComment closeReview={() => setModelReview(false)} />}
      <View style={styles.layoutDetail}>
        <Image
          style={styles.bookImg}
          source={{
            uri: data.medias[0],
          }}
        />
        <Text style={styles.bookTitle}>{data.title}</Text>
        <Text style={styles.bookAuthor}>{data.authors[0].name}</Text>
        <View style={styles.layoutStarPrice}>
          <View style={styles.layoutStar}>
            <Star star={data.overallStarRating} />
          </View>
          <View style={styles.layoutPrice}>
            <Icon name="ic-price" size={10} color={colors.primary} />
            <Text style={styles.textPrice}>{data.price}</Text>
          </View>
        </View>
        <View style={styles.layoutTag}>
          {data.categories.map((item) => {
            return (
              <View style={styles.itemTag} key={toString()}>
                <Text style={styles.textTag}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.layoutDescription}>
          <Text numberOfLines={isMore ? 10 : 3} style={styles.textDescription}>
            {data.content}
          </Text>
          <ListBook />
        </View>
        <ScrollView horizontal={true}>
          {datas.map((item, index) => {
            return (
              <ItemBook
                key={index}
                image={item.medias[0]}
                title={item.title}
                authors={item.authors[0].name}
                price={item.price}
                idBook={item.id}
                rating={item.overallStarRating}
                idComponent={props.componentId}
              />
            );
          })}
        </ScrollView>
        <View style={styles.layoutComment}>
          <Text style={styles.titleComment}>Nhận xét</Text>
          <TouchableOpacity style={styles.btnComment} onPress={() => setModelReview(true)}>
            <Text style={styles.textButtonComment}>Viết nhận xét cho cuốn sách này</Text>
          </TouchableOpacity>
          <View style={styles.layoutItemComment}>
            <View style={styles.itemComment}>
              <View style={styles.profileComment}>
                <Image style={styles.avtComment} source={book} />
                <View style={styles.containStarComment}>
                  <Text style={styles.nameComment}>Kim Dung</Text>
                  <View style={styles.layoutStarComment}>
                    <Star star={data.overallStarRating} />
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
      {/* {checkLoadAddCart && <ActivityIndicator size="small" color="#0000ff" />} */}
      <TouchableOpacity style={styles.btnAddToCart} onPress={() => onAddToCart()}>
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
