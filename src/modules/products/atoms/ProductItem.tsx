/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {navigate} from '@navigation/NavigationUtil';
import Icon from '@components/atoms/Icon';
import {RFValue} from 'react-native-responsive-fontsize';
import UniversalAdd from './UniversalAdd';

type Props = {
  isOdd: boolean;
  item: any;
};

const ProductItem = ({isOdd, item}: Props) => {
  return (
    <View style={[styles.productCard, {marginRight: isOdd ? 0 : 10}]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image_uri}} style={styles.productImage} />
        {item?.ar_uri && (
          <>
            <TouchableOpacity
              style={styles.button3d}
              onPress={() =>
                navigate('ARViewer', {
                  uri: item?.ar_uri,
                })
              }>
              <Icon
                name="cube-scan"
                size={32}
                color="#fff"
                iconFamily="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.productPrice}>
          <Text style={{textDecorationLine: 'line-through', opacity: 0.6}}>
            ${item.price + 699}
          </Text>
          ${item.price}
        </Text>

        <View style={styles.flexRow}>
          <View style={styles.hotDealContainer}>
            <Text style={styles.hotDealText}>Hot Deal</Text>
          </View>
          <UniversalAdd item={item}/>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    width: '48%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  imageContainer: {
    aspectRatio: 1,
    width: '100%',
    height: 240,
    backgroundColor: '#F7F7F7',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button3d: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    elevation: 5,
    zIndex: 1,
  },
  productTitle: {
    fontSize: RFValue(10),
    marginTop: 10,
  },
  productDescription: {
    fontSize: RFValue(9),
    marginTop: 5,
    color: '#555',
    textAlign: 'left',
  },
  productPrice: {
    fontSize: RFValue(10),
    marginTop: 10,
    color: '#000',
    fontWeight: '500',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotDealContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    borderRadius: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#E7F9EC',
  },
  hotDealText: {
    fontSize: RFValue(10),
    color: '#35ABFF',
    fontWeight: '700',
  },
});
