import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../../themes/Colors';
import { Dimensions } from 'react-native';
import ItemBookHorizontal from '../../components/ItemBookHorizontal';
import { Navigation } from 'react-native-navigation';
import ItemBook from '../../components/ItemBook';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from '../../components/TitleHeader';
const windowWidth = Dimensions.get('window').width;

const Filter = (props) => {
  const [check, setCheck] = React.useState(true);
  const data = useSelector((state) => state.bookTypes.responseDataType.data);
  const onBackLayout = () => {
    Navigation.pop(props.componentId);
  };
  const onChangeFilter = () => {
    setCheck(!check);
  };
  return (
    <View style={styles.container}>
      <TitleHeader
        title={'Tháng Tư và tuổi trẻ'}
        leftIcon={'ic-back'}
        rightIcon={'ic-search'}
        onBackLayout={onBackLayout}
      />
      <View style={styles.layoutHeader}>
        <View style={styles.itemType}>
          <Text style={styles.textType}>Thể loại</Text>
          <Icon name="filter" color={colors.txtLevel3} size={15} />
        </View>
        <View style={styles.itemType}>
          <Text style={styles.textType}>Thể loại</Text>
          <Icon name="select" color={colors.txtLevel3} size={15} />
        </View>
        <TouchableOpacity onPress={onChangeFilter} style={styles.itemFilterChange}>
          <Icon name="ic-filter-change" color={colors.txtLevel3} size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.layoutItem}>
        {check ? (
          <View>
            <ItemBookHorizontal />
            <ItemBookHorizontal />
            <ItemBookHorizontal />
          </View>
        ) : (
          <View style={styles.twoItem}>
            {data.map((item, index) => {
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
          </View>
        )}
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutHeader: {
    flexDirection: 'row',
  },
  itemType: {
    flexDirection: 'row',
    borderColor: '#e9e9e9',
    borderLeftWidth: null,
    borderWidth: 1,
    justifyContent: 'space-around',
    padding: 8,
    width: (windowWidth - 32) / 2,
  },
  itemFilterChange: {
    flexDirection: 'row',
    borderColor: colors.txtLevel2,
    borderWidth: 1,
    justifyContent: 'space-around',
    padding: 8,
  },
  layoutItem: {
    marginLeft: 15,
    marginBottom: 15,
  },
  twoItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: (windowWidth - 155 * 2 + 40) / 2,
  },
});
