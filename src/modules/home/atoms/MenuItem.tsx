import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface MenuItem {
  item: {
    name: string;
    iconUrl: string;
  };
  isFocused: boolean;
  onSelect: () => void;
}

const MenuItem: FC<MenuItem> = ({isFocused, item, onSelect}) => {
  return (
    <View>
      <Text>MenuItem</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
