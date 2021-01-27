import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { introScreen } from '../../navigation/pushScreen';
import ItemBoook from '../../components/itemBoook';
import ListBook from '../../components/ListBook';
import { useDispatch, useSelector } from 'react-redux';
import BookTypes from '../../redux/HomeRedux/actions';
import { Navigation } from 'react-native-navigation';
// const data = {
//   readMore: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
// };

const Home = (props) => {
  const dispatch = useDispatch();
  // const [data, setData] = useState(0);
  const datas = useSelector((state) => state.bookTypes.responseDataType.data);
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    Navigation.mergeOptions('sideBar', {
      topBar: {
        visible: true,
      },
      bottomTabs: {
        visible: true,
      },
    });
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {datas.map((item, index) => {
            return (
              <ItemBoook
                key={index}
                image={item.medias[0]}
                title={item.title}
                authors={item.authors[0].name}
                price={item.price}
              />
            );
          })}
        </ScrollView>
        <Text />
      </View>
      {/* <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {data.readMore.map((item, index) => {
            return <ItemBoook />;
          })}
        </ScrollView>
      </View>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {data.readMore.map((item, index) => {
            return <ItemBoook />;
          })}
        </ScrollView>
      </View>
     */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
  },
  layoutItem: {
    marginTop: 23,
  },
  btnNavigation: {
    width: 150,
    height: 40,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
