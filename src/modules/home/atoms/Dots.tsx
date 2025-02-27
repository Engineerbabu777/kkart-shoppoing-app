/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  active: number;
  index: number | string;
};
export default function Dots({active, index}: Props) {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (active === index) {
      progress.value = withRepeat(
        withTiming(1, {duration: 3000}),
        1,
        false,
        () => {
          progress.value = 0;
        },
      );
    } else {
      progress.value = 0;
    }
  }, [active, index, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));
  return (
    <View
      style={{
        width: active === index ? 35 : 20,
        height: 4,
        borderRadius: 50,
        backgroundColor: '#DFDFDF',

        overflow: 'hidden',
        marginHorizontal: 5,
      }}>
      <Animated.View
        style={[
          {height: '100%', backgroundColor: '#000', borderRadius: 50},
          animatedStyle,
        ]}></Animated.View>
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          top: 5,
          left: 5,
          fontSize: 10,
        }}>
        1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
