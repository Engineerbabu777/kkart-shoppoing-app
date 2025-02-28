import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {getProductsByCategory} from './api/getProducts';
import {screenHeight} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import SearchBar from './atoms/SearchBar';
import ProductItem from './atoms/ProductItem';
import {useAppSelector} from '@store/reduxHook';
import {selectTotalItemsInCart} from '@modules/cart/api/slice';

export default function ProductList() {
  const route = useRoute();
  const category = route?.params as any;
  const [products, setProducts] = useState<any[]>([]);
  const cartLength = useAppSelector(selectTotalItemsInCart);

  const fetchProducts = async () => {
    try {
      const response = await getProductsByCategory(category.id);
      setProducts(response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({item, index}: any) => {
    const isOdd = index % 2 !== 0;
    return <ProductItem item={item} isOdd={isOdd} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <SearchBar cartLength={cartLength} />

      <FlatList
        bounces={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        numColumns={2}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Ops! No products found in this category.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  listContainer: {
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    height: screenHeight - 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  emptyText: {
    fontSize: RFValue(14),
    color: '#666',
    marginBottom: 16,
  },
});
