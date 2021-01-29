import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { introScreen, pushScreen } from '../../navigation/pushScreen';
import ItemBook from '../../components/ItemBook';
import ListBook from '../../components/ListBook';
import { useDispatch, useSelector } from 'react-redux';
import BookTypes from '../../redux/HomeRedux/actions';
import { Navigation } from 'react-native-navigation';
import DetailActions from '../../redux/DetailRedux/actions';

const Home = (props) => {
  const datas = useSelector((state) => state.bookTypes.responseDataType.data);
  const dispatch = useDispatch();
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'sideBar') {
      Navigation.mergeOptions('sideBar', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    } else if (buttonId === 'search') {
      pushScreen(props.componentId, 'Search', '', '', false);
    }
  });

  const onFilter = () => {
    pushScreen(props.componentId, 'Filter', '', '', false);
  };

  const onDetailBook = (id) => {
    dispatch(DetailActions.getDetailBook(id, onSuccess));
  };

  const onSuccess = () => {
    pushScreen(props.componentId, 'Detail', '', '', true, 'ic-back', 'ic-cart-1');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.layoutItem}>
        <ListBook onFilter={onFilter} />
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
      </View>
      <View style={styles.layoutItem}>
        <ListBook onFilter={onFilter} />
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
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.layoutItem}>
        <ListBook onFilter={onFilter} />
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
              />
            );
          })}
        </ScrollView>
      </View>
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
