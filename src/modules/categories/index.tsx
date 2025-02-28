import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {getCategories} from './api/actions';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '@utils/Constants';
import {navigate} from '@navigation/NavigationUtil';

export default function Categories() {
  const dispatch = useAppDispatch();
  const {data, loading, error} = useAppSelector(state => state.categories);

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Categories</Text>
        <Text style={styles.subHeaderText}>
          Explore our wide range of categories
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size={'small'} color={'black'} />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item: any) => item._id?.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigate('Products', {
                  name: item?.name,
                  id: item?._id,
                })
              }>
              <Image source={{uri: item.image_uri}} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}
          ListFooterComponent={
            <>{error && <Text style={styles.subHeaderText}>{error}</Text>}</>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9EC',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#333',
    fontFamily: FONTS.heading,
  },
  subHeaderText: {
    fontSize: RFValue(13),
    color: '#333',
    marginTop: 5,
  },
  itemContainer: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemName: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#333',
  },
});
