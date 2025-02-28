import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, screenWidth} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from '@components/atoms/Icon';

export default function VerticalList({data}: {data: any}) {
  console.log({data22: data});
  return (
    <View style={styles.container}>
      <View style={[styles.absoluteView, {backgroundColor: data?.bgColor}]}>
        <Text style={styles.headingText}>{data?.title}</Text>

        <Pressable style={[styles.button, {backgroundColor: data?.btnColor}]}>
          <Text style={styles.textStyle}>Explore More</Text>
          <Icon name="arrow-forward-sharp" iconFamily="Ionicons" size={16} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  absoluteView: {
    width: screenWidth,
    height: 180,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  headingText: {
    fontSize: RFValue(16),
    fontFamily: FONTS.heading,
    color: '#222',
  },
  button: {
    padding: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 10,
    marginVertical: 15,
  },
  textStyle: {
    fontWeight: '400',
    color: '#fff',
    fontSize: RFValue(12),
  },
});
