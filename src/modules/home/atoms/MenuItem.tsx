import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

interface MenuItem {
  item: {
    name: string;
    iconUri: string;
  };
  isFocused: boolean;
  onSelect: () => void;
}

const MenuItem: FC<MenuItem> = ({isFocused, item, onSelect}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.container, isFocused && styles.isFocused]}>
      <Image
        source={item?.iconUri as ImageSourcePropType}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          isFocused ? styles.textFocused : styles.textUnfocused,
        ]}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  isFocused: {
    backgroundColor: 'black',
  },
  icon: {
    width: RFValue(18),
    height: RFValue(18),
    marginVertical: 4,
  },
  textFocused: {
    color: 'white',
  },
  textUnfocused: {
    color: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: RFValue(10),
    fontStyle: 'italic',
    fontFamily:'serif',
  },
});
