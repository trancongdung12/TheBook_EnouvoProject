/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
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
import { pushScreen } from '../../navigation/pushScreen';
import AddComment from '../../components/HandleComment';
import Comment from '../../components/ItemComment';
import ReviewActions from '../../redux/ReviewRedux/actions';
import HTMLView from 'react-native-htmlview';
import DetailActions from '../../redux/DetailRedux/actions';
const Detail = (props) => {
  const [modal, setModal] = useState(false);
  const [modalReview, setModalReview] = useState(false);
  const [modalUpdateReview, setModalUpdateReview] = useState(false);
  const [isCommented, setIsCommented] = useState(true);
  const data = useSelector((state) => state.detail.responseBookDetail);
  const datas = useSelector((state) => state.bookTypes.responseDataType.data);
  const user = useSelector((state) => state.user);
  const carts = useSelector((state) => state.carts);
  const allReviews = useSelector((state) => state.review);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ReviewActions.getALlReviewBook());
    allReviews.reviewData.reviews.map((item) => {
      item.bookId === data.id && item.userId === user.data.id && setIsCommented(false);
    });
  }, [dispatch, data.id, user.data.id, allReviews]);

  const closeModal = () => {
    setModal(false);
  };

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

  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'ic-back') {
      Navigation.pop(props.componentId);
    } else if (buttonId === 'ic-cart-1') {
      dispatch(CartActions.userGetCart(onSuccess));
    }
  });
  const onSuccess = () => {
    pushScreen(props.componentId, 'Cart', '', 'Cart', false, 'ic-back', 'ic-cart-1');
  };
  const AlertWarning = (id) => {
    Alert.alert(
      'Xóa Bình Luận',
      'Bạn có chắc xóa bình luận này không?',
      [
        {
          text: 'Không',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Có',
          onPress: () => dispatch(ReviewActions.removeReviewBook(id)),
        },
      ],
      { cancelable: false },
    );
  };

  const onUpdateComment = (id) => {
    dispatch(ReviewActions.getEditReviewBook(id, onSuccessUpdate));
  };

  const onSuccessUpdate = () => {
    setModalUpdateReview(true);
  };

  const onDetailBook = (id) => {
    dispatch(DetailActions.getDetailBook(id, onSuccessListBook));
  };

  const onSuccessListBook = () => {
    pushScreen(props.componentId, 'Detail', '', '', true, 'ic-back', 'ic-cart-1');
  };

  // Check loading of add to cart
  // const checkLoadAddCart = carts.loadingAddCart;
  return (
    <ScrollView
      style={[styles.container, modal && { opacity: 0.3 }, modalReview && { opacity: 0.3 }]}
    >
      {modal && (
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
      {modalReview && <AddComment closeReview={() => setModalReview(false)} />}

      {modalUpdateReview && (
        <AddComment
          isUpdate={true}
          reviewData={allReviews.editData}
          closeReview={() => setModalUpdateReview(false)}
        />
      )}

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
          <HTMLView value={data.content.substring(0, 300) + '...'} />
          <ListBook />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                onDetailBook={onDetailBook}
              />
            );
          })}
        </ScrollView>
        <View style={styles.layoutComment}>
          <Text style={styles.titleComment}>Nhận xét</Text>
          {isCommented && (
            <TouchableOpacity style={styles.btnComment} onPress={() => setModalReview(true)}>
              <Text style={styles.textButtonComment}>Viết nhận xét cho cuốn sách này</Text>
            </TouchableOpacity>
          )}
          {allReviews.reviewData.reviews.map((item, index) => {
            return (
              item.bookId === data.id &&
              (item.userId === user.data.id ? (
                <Comment
                  isUser={true}
                  idReview={item.id}
                  key={index}
                  content={item.content}
                  starSize={item.starRating}
                  name={item.userName}
                  showAlert={AlertWarning}
                  openUpdate={onUpdateComment}
                />
              ) : (
                <Comment
                  idBook={item.bookId}
                  key={index}
                  content={item.content}
                  starSize={item.starRating}
                  name={item.userName}
                />
              ))
            );
          })}
          <TouchableOpacity>
            <Text style={styles.viewAllComment}>Xem tất cả nhân xét</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.btnAddToCart} onPress={() => onAddToCart()}>
        <Text style={styles.textAddToCart}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewAllComment: {
    marginTop: 12,
    textAlign: 'center',
    color: colors.waterBlueTwo,
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
    color: 'red',
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
