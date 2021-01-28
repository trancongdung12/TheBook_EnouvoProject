import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import colors from '../themes/Colors';
import addReviewBook from '../redux/ReviewRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function AddComment(props) {
  const [alertVisible, setAlertVisible] = useState(true);
  const [star, setStar] = useState(5);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const bookId = useSelector((state) => state.detail.responseBookDetail.id);
  const userId = useSelector((state) => state.user.data.id);

  const closeModel = () => {
    setAlertVisible(false);
    props.closeReview();
  };

  const onStarRatingPress = (rating) => {
    setStar(rating);
  };

  const addReview = () => {
    const data = {
      bookId: bookId,
      userId: userId,
      content: comment,
      starRating: star,
      isDeleted: false,
      isOutstanding: true,
    };
    if (comment === '') {
      // eslint-disable-next-line no-alert
      alert('Vui lòng nhập bình luận !');
    } else {
      dispatch(addReviewBook(data));
      closeModel();
    }
  };
  return (
    <View style={styles.centerView}>
      <Modal animationType="slide" transparent={true} visible={alertVisible}>
        <View>
          <View style={styles.modalView}>
            <View style={styles.layoutReview}>
              <Text style={styles.textReview}>Đánh giá</Text>
              <StarRating
                style={styles.layoutRating}
                disabled={false}
                maxStars={5}
                rating={star}
                starSize={25}
                fullStarColor={colors.primary}
                selectedStar={(rating) => onStarRatingPress(rating)}
              />
            </View>
            <View style={styles.layoutComment}>
              <Text style={styles.textReview}>Bình luận</Text>
              <TextInput
                style={styles.inputComment}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setComment(text)}
                value={comment}
                placeholder="Nhập nội dung nhận xét ở đây, tối thiểu 30 ký tự, tối đa 2000 ký tự"
              />
            </View>
            <TouchableOpacity style={styles.btnSendReview} onPress={addReview}>
              <Text style={styles.textSendReview}>Gởi nhận xét</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  modalView: {
    marginTop: (windowHeight - 400) / 2,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textReview: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  layoutComment: {
    marginTop: 40,
  },
  inputComment: {
    borderWidth: 1,
    borderColor: colors.txtLevel2,
    width: windowWidth - 100,
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 0,
  },
  btnSendReview: {
    marginTop: 20,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  textSendReview: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
