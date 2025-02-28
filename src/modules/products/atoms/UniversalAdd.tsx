/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {
  addItem,
  removeItem,
  selectItemCountById,
} from '@modules/cart/api/slice';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@utils/Constants';
import Icon from '@components/atoms/Icon';

type Props = {
  item: any;
};

const UniversalAdd = ({item}: Props) => {
  const count = useAppSelector(selectItemCountById(item?._id));
  const dispatch = useAppDispatch();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: count === 0 ? '#fff' : Colors.active},
      ]}>
      {count === 0 ? (
        <TouchableOpacity onPress={() => dispatch(addItem(item))}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterContainer}>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeItem(item));
            }}>
            <Icon
              name="minus"
              iconFamily="AntDesign"
              size={RFValue(13)}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(addItem(item));
            }}>
            <Icon
              name="plus"
              iconFamily="AntDesign"
              size={RFValue(13)}
              color="white"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UniversalAdd;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: RFValue(12),
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  addText: {
    color: Colors.active,
  },
  add: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    borderColor: Colors.active,
    borderWidth: 1,
  },
});
