import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import library from '../../assets/image/library.png';
import Icon from 'react-native-vector-icons/thebook-appicon';
import avatar from '../../assets/image/avatar.jpg';
import colors from '../../themes/Colors';
import banner from '../../assets/image/banner.jpg';
const windowWidth = Dimensions.get('window').width;
const Library = () => {
  const [option, setOption] = useState('image');
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={library}>
        <Text style={styles.title}>The Library</Text>
        <Text style={styles.website}>www.thebook.com</Text>
        <Text style={styles.slogan}>
          Think back over your life. Think about the people that had a positive influence on you. If
          your past… Think back over your life.
        </Text>
        <View style={styles.layoutIcon}>
          <Icon name="ic-instagram" size={20} color="white" />
          <Icon name="ic-facebook" size={20} color="white" />
          <Icon name="ic-youtube" size={20} color="white" />
        </View>
        <View style={styles.layoutTime}>
          <View style={styles.timeOpen}>
            <Text style={styles.textStatus}>OPEN</Text>
            <Text style={styles.textTime}>8am</Text>
          </View>
          <Image style={styles.imgCenter} source={avatar} />
          <View style={styles.timeOpen}>
            <Text style={styles.textStatus}>OPEN</Text>
            <Text style={styles.textTime}>8am</Text>
          </View>
        </View>
        <View style={styles.viewContact}>
          <View style={styles.itemContact}>
            <Icon style={styles.iconRound} name="ic-phone" size={15} color="white" />
            <View style={styles.layoutContact}>
              <Text style={styles.textTitle}>Phone</Text>
              <Text style={styles.textValue}>(+84) 000 000 000</Text>
            </View>
          </View>
          <View style={styles.itemContact}>
            <Icon style={styles.iconRound} name="ic-solid-direction" size={15} color="white" />
            <View style={styles.layoutContact}>
              <Text style={styles.textTitle}>Andress</Text>
              <Text style={styles.textValue}>20 Cao Thắng</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.layoutOption}>
        <TouchableOpacity
          onPress={() => setOption('image')}
          style={[styles.itemOption, option === 'image' && styles.isTextOption]}
        >
          <Text style={styles.textOption}>Hình Ảnh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOption('event')}
          style={[styles.itemOption, option === 'event' && styles.isTextOption]}
        >
          <Text style={styles.textOption}>Sự Kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOption('promote')}
          style={[styles.itemOption, option === 'promote' && styles.isTextOption]}
        >
          <Text style={styles.textOption}>Khuyến Mãi</Text>
        </TouchableOpacity>
      </View>
      {(() => {
        if (option === 'image') {
          return <Image style={styles.imgBanner} source={banner} />;
        } else if (option === 'event') {
          return <Text>Sự kiện</Text>;
        } else if (option === 'promote') {
          return <Text>Khuyến mãi</Text>;
        }
      })()}
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    height: 350,
    width: windowWidth,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  website: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
  },
  slogan: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  layoutIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    paddingHorizontal: 50,
  },
  imgCenter: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
  layoutTime: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  timeOpen: {
    marginTop: 20,
  },
  textStatus: {
    color: 'white',
  },
  textTime: {
    fontWeight: 'bold',
    color: 'white',
  },
  viewContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
    width: (windowWidth - 75) / 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconRound: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  textTitle: {
    fontSize: 10,
    color: 'white',
  },
  textValue: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  layoutContact: {
    marginTop: 5,
  },
  layoutOption: {
    borderBottomColor: colors.txtLevel2,
    borderBottomWidth: 1,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textOption: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  isTextOption: {
    color: colors.secondary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  imgBanner: {
    height: 150,
    width: windowWidth - 20,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 10,
  },
});
