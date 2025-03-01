import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import UniversalAdd from '@modules/products/atoms/UniversalAdd';
import {Text} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  item: any;
};

const OrderItem = ({item}: Props) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.image_uri}} style={styles.img} />
        <UniversalAdd item={item} />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          ${item.price} x {item?.quantity}
        </Text>
        <Text style={styles.itemTotal}>${item.totalPrice}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'flex-start',
    padding: 10,
    borderColor: '#F0F2F5',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  imageContainer: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    borderWidth: 1,
    height: 90,
    borderColor: '#ccc',
    width: '100%',
    marginBottom: 10,
  },
  itemContainer: {
    width: '70%',
  },
  itemName: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#000',
  },
  itemDetails: {
    fontSize: RFValue(10),
    color: '#666',
    marginTop: 4,
  },
  itemTotal: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: '#555',
    marginTop: 8,
  },
});
