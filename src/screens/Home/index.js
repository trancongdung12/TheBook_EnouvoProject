import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { pushScreen } from '../../navigation/pushScreen';
import ItemBook from '../../components/ItemBook';
import ListBook from '../../components/ListBook';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import DetailActions from '../../redux/DetailRedux/actions';

const Home = (props) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    dispatch(DetailActions.getDetailBook(id, onSuccess));
  };

  const onSuccess = () => {
    setLoading(false);
    pushScreen(props.componentId, 'Detail', '', '', true, 'ic-back', 'ic-cart-1');
  };

  return loading ? (
    <ActivityIndicator style={{ flex: 1 }} size="small" color="#0000ff" />
  ) : (
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
                onDetailBook={onDetailBook}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
