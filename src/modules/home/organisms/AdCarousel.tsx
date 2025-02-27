import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {screenHeight, screenWidth} from '@utils/Constants';
import FlipSlip from '../molecules/FlipSlip';

type Props = {
  data: any;
};
export default function AdCarousel({data}: Props) {
  const [active, setActive] = useState(0);
  const baseOptions = {
    vertical: false,
    width: screenWidth,
    height: screenHeight * 0.8,
  };
  return (
    <View>
        <FlipSlip />
    </View>
  );
}

const styles = StyleSheet.create({});
