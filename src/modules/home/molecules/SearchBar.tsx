import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

export default function SearchBar() {
  return (
    <>
      <SafeAreaView />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  toggleContainer: {
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: RFValue(8),
  },
  switchIcon: {
    width: '100%',
    height: 30,
    marginTop: 4,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    height: 40,
    color: 'black',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fafafa',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
});
