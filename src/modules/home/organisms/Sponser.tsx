import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {navigate} from '@navigation/NavigationUtil';
import {screenWidth} from '@utils/Constants';

type Props = {
  data: any;
};

export default function Sponser({data}: Props) {
  return (
    <Pressable style={styles.container} onPress={() => navigate('Categories')}>
      <Image style={styles.img} source={{uri: data?.[0]?.image_uri}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    height: 80,
    width: screenWidth - 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
});
