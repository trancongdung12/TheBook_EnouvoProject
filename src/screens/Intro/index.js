/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Book from './introItem';
import intro1 from '../../assets/image/intro1.png';
import intro2 from '../../assets/image/intro2.png';
import intro3 from '../../assets/image/intro3.png';
import colors from '../../themes/Colors';
import { makeSkipIntro } from '../../redux/AppRedux/actions';
import { useDispatch } from 'react-redux';

const data = {
  intro: [
    {
      title: 'Tìm sách yêu thích',
      description: 'Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống',
      image: intro1,
      btn: false,
    },
    {
      title: 'Lưu vào giỏ và đặt sách',
      description: 'Sách sẽ được giữ trong 2 giờ đồng hồ Hãy chắc chắn là bạn đến nhận kịp giờ',
      image: intro2,
      btn: false,
    },
    {
      title: 'Tận hưởng cuốn sách',
      description: 'Chọn một nơi yêu thích và tận hưởng cuốn sách mà mình yêu thích thôi nào.',
      image: intro3,
      btn: true,
    },
  ],
};

const Intro = () => {
  const [entries, setEntries] = React.useState(data.intro);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const dispatch = useDispatch();
  const _renderItem = ({ item, index }) => {
    return <Book key={index} inform={item} />;
  };
  return (
    <View style={{ width: 340, height: 640 }}>
      <Carousel
        style={styles.container}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={400}
        itemWidth={400}
        windowSize={1}
      />

      {(() => {
        if (activeSlide === 2) {
          return (
            <View style={styles.paginationBtn}>
              <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ alignItems: 'center', marginLeft: 50, marginBottom: 100 }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: colors.waterBlueTwo,
                }}
                inactiveDotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#e9e9e9',
                }}
                inactiveDotScale={0.6}
              />
              <TouchableOpacity style={styles.btnStart} onPress={() => dispatch(makeSkipIntro())}>
                <Text style={styles.txtStart}>Bắt đầu</Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <View style={styles.pagination}>
              <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: colors.waterBlueTwo,
                }}
                inactiveDotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#e9e9e9',
                }}
                inactiveDotScale={0.6}
              />
            </View>
          );
        }
      })()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  pagination: {
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 160,
  },
  paginationBtn: {
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 120,
  },
  btnStart: {
    width: 120,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.waterBlueTwo,
  },
  txtStart: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Intro;
