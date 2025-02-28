/* eslint-disable react-native/no-inline-styles */
import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {screenHeight} from '@utils/Constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';
import MainList from './templates/MainList';

const Home = () => {
  const insets = useSafeAreaInsets();

  const scrollYGlobal = useSharedValue(0);

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{height: Platform.OS === 'android' ? insets.top : 0}} />

      <Animated.View style={[moveUpStyle]}>
        <View style={{}}>
          <MenuHeader scrollY={scrollYGlobal} />
          <SearchBar />
        </View>
      </Animated.View>

      <Animated.View style={[moveUpStyle, {flex:1}]}>
        <MainList scrollYGlobal={scrollYGlobal} />
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
