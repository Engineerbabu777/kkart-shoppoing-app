/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import Icon from '@components/atoms/Icon';
import {goBack} from '@navigation/NavigationUtil';
import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  cartLength: number;
};

export default function SearchBar({cartLength}: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Icon name="arrowleft" iconFamily="AntDesign" color="#000" size={24} />
      </Pressable>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} iconFamily="Ionicons" color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          placeholderTextColor="#666"
        />
      </View>

      <Icon name="heart-outline" iconFamily="Ionicons" color="#000" size={24} />
      <Pressable>
        <Icon name="cart-sharp" iconFamily="Ionicons" color="#000" size={24} />
        {cartLength > 0 && (
          <>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartLength}</Text>
            </View>
          </>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '70%',
    marginHorizontal: 10,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -5,
    backgroundColor: '#ff0000',
    borderRadius: 16,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: RFValue(12),
    fontWeight: 'bold',
  },
});
