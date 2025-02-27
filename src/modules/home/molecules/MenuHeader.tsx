import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {menuData} from '@utils/db';
import MenuItem from '../atoms/MenuItem';

type MenuHeaderProps = {
  scrollY: any;
};

export default function MenuHeader({scrollY}: MenuHeaderProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);

    return {
      opacity,
    };
  });
  return (
    <Animated.View style={[styles.container, opacityFadingStyles]}>
      <SafeAreaView />

      <View style={styles.flexRow}>
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isFocused={focusedIndex === index}
            onSelect={() => {
              setFocusedIndex(index);
            }}
          />
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    gap: 5,
  },
});
