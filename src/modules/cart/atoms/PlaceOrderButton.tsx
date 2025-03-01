/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAppSelector} from '@store/reduxHook';
import {selectCartItems, selectTotalPriceInCart} from '../api/slice';
import LoginModal from '@modules/account/molecule/LoginModal';
import { createOrder, createTransaction } from '../api/PayGateway';

type Props = {};

const PlaceOrderButton = ({}: Props) => {
  const user = useAppSelector(state => state.account.user);
  const carts = useAppSelector(selectCartItems);

  const price = useAppSelector(selectTotalPriceInCart);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handlePlaceOrder = async() => {
    //  setLoading(true);
     const data = await createTransaction(price,user?._id);
     if(data){
      // const order = await createOrder(....data);
      // if(order.type === "Error"){

      // }
     }else{
      Alert.alert("Transaction not found - please try again later")
     }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.strikePrice}>${price + 1200}</Text>$
          <Text style={styles.price}>
            <Text
              style={{
                fontSize: RFValue(10),
              }}>
              {' '}
              i
            </Text>
          </Text>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={() => {
            if (user) {
              handlePlaceOrder();
            } else {
              setVisible(true);
            }
          }}
          style={styles.button}>
          {loading ? (
            <ActivityIndicator color={'black'} size={'small'} />
          ) : (
            <Text style={styles.btnText}>Place Order</Text>
          )}
        </TouchableOpacity>
      </View>

      {visible && (
        <LoginModal onClose={() => setVisible(false)} visible={visible} />
      )}
    </>
  );
};

export default PlaceOrderButton;

const styles = StyleSheet.create({
  price: {
    color: '#000',
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#FFC201',
    padding: 10,
    borderRadius: 6,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnText: {
    color: '#222',
    fontWeight: '600',
    fontSize: RFValue(13),
  },
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 2,
    borderColor: '#F0F2F5',
    width: '100%',
    padding: 15,
    paddingBottom: Platform.OS === 'ios' ? 30 : 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  strikePrice: {
    fontSize: RFValue(11),
    color: '#888',
    textDecorationLine: 'line-through',
  },
});
