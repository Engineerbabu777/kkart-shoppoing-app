import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {screenHeight, screenWidth} from '@utils/Constants';
import FlipSlip from '../molecules/FlipSlip';
import Carousel from 'react-native-reanimated-carousel';

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
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3500}
        onSnapToItem={(index: any) => setActive(index)}
        data={data}
        renderItem={({item}: any) => (
          <Pressable style={styles.imageContainer}>
            <Image source={item?.image_uri} style={styles.image} />
          </Pressable>
        )}
      />

      {active != null && (
        <View style={styles.dots}>
          {data?.map((item: any, index: number) => {
            return <View></View>;
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '40%',
  },
  dots: {
    flexDirection: 'row',
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
