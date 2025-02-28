import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS, screenHeight, screenWidth} from '@utils/Constants';
import {navigate} from '@navigation/NavigationUtil';

export default function AnimatedHorizontalList({data}: {data: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        scrollEventThrottle={16}
        data={data?.data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigate('Categories')}
            style={styles.imageContainer}>
            <Image source={{uri: item?.image_uri}} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  textStyle: {
    fontSize: RFValue(14),
    fontFamily: FONTS.heading,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.6,
    marginRight: 15,
  },
});
