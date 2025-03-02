/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, screenWidth} from '@utils/Constants';
import {useRoute} from '@react-navigation/native';
import {goBack, navigate} from '@navigation/NavigationUtil';
import LottieView from 'lottie-react-native';

type Props = {};

const PaymentSuccess = ({}: Props) => {
  const route = useRoute();
  const orderDetails = route.params as any;

  useEffect(() => {
    const timeId = setTimeout(() => {
      goBack();
      navigate('Account', {
        isRefresh: true,
      });
    }, 4000);

    return clearTimeout(timeId);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('@assets/animations/confirm.json')}
        autoPlay
        duration={2000}
        loop={false}
        speed={1}
        style={styles.lottieView}
        hardwareAccelerationAndroid
        enableMergePathsAndroidForKitKatAndAbove={true}
      />

      <Text style={styles.orderPlacedText}>
        ORDER PLACED - ${orderDetails?.price}
      </Text>

      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryText}>Delivering to Home</Text>
      </View>

      <Text style={{textAlign: 'center'}}>{orderDetails?.address}</Text>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  addressText: {
    opacity: 0.8,
    textAlign: 'center',
  },
  deliveryText: {
    marginTop: 15,
    borderColor: Colors.active,
    textAlign: 'center',
  },
  deliveryContainer: {
    borderColor: Colors.active,
    marginBottom: 5,
    paddingBottom: 4,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: screenWidth * 0.6,
    height: 150,
  },
  orderPlacedText: {
    opacity: 0.8,
    textAlign: 'center',
  },
});
