import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {menuData} from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atoms/Icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@utils/Constants';

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

      <View style={styles.addressContainer}>
        <Icon name="home" iconFamily="Ionicons" size={24} />
        <Text style={styles.home}>HOME</Text>
        <Text style={styles.addressText} numberOfLines={1}>
          D-79, Block D, Sector 48, Noida, Uttar Pradesh 201303, India
        </Text>
        <Icon name="chevron-forward-sharp" iconFamily="Ionicons" size={16} />
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
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  home: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: RFValue(11),
  },
  addressText: {
    flex: 1,
    fontSize: RFValue(9),
    color: Colors.text,
  },
});
