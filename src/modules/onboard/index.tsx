import {Image, StyleSheet, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Colors, screenWidth} from '@utils/Constants';
import {resetAndNavigate} from '@navigation/NavigationUtil';

export default function Splash() {
  useEffect(() => {
    const id = setTimeout(() => {
      resetAndNavigate('MainNavigator');
    }, 2000);
    return () => clearTimeout(id);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  image: {
    width: screenWidth * 0.35,
    height: screenWidth * 0.35,
    resizeMode: 'contain',
  },
});
