import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { introScreen } from '../../navigation/pushScreen';
import ItemBoook from '../../components/itemBoook';
import ListBook from '../../components/ListBook';
import { useDispatch, useSelector } from 'react-redux';
import BookTypes from '../../redux/HomeRedux/actions';
// const data = {
//   readMore: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
// };

const Home = (props) => {
  const dispatch = useDispatch();
  const [datas, setData] = React.useState(0);
  const data = useSelector((state) => state.bookTypes.responseDataType);
  React.useEffect(() => {
    // dispatch(BookTypes.getBookTypes());
    console.log(dispatch(BookTypes.getBookTypes()));
    setData(data);
    console.log(data);
  },[datas]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutItem}>
        <ListBook />
        <ScrollView horizontal={true}>
          {datas.data.map((item, index) => {
            return <ItemBoook key={index} data={item} />;
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
