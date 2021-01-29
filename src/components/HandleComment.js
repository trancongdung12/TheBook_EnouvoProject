import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import colors from '../themes/Colors';
import ReviewTypes from '../redux/ReviewRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function AddComment(props) {
  const [alertVisible, setAlertVisible] = useState(true);
  const [star, setStar] = useState(5);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const bookId = useSelector((state) => state.detail.responseBookDetail.id);
  const userId = useSelector((state) => state.user.data.id);

  useEffect(() => {
    if (props.isUpdate) {
      setStar(props.reviewData.starRating);
      setComment(props.reviewData.content);
    }
  }, []);
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
      dispatch(ReviewTypes.addReviewBook(data));
      closeModel();
    }
  };

  const updateReview = () => {
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
      dispatch(ReviewTypes.updateReviewBook(props.reviewData.id, data));
      closeModel();
    }
  };

  return (
    <View style={styles.centerView}>
      <Modal animationType="slide" transparent={true} visible={alertVisible}>
        <View>
          <View style={styles.modalView}>
            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => closeModel()}>
              <Icon name="ic-delete" size={15} color={colors.txtLevel3} />
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.btnSendReview}
              onPress={props.isUpdate ? updateReview : addReview}
            >
              <Text style={styles.textSendReview}>
                {props.isUpdate ? 'Cập nhập nhận xét' : 'Gởi nhận xét'}
              </Text>
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
    paddingVertical: 10,
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
