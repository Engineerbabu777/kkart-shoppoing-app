import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {navigate} from '@navigation/NavigationUtil';

export default function HorizontalList({data}: {data: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        style={{
          paddingHorizontal: 15,
        }}
        data={data?.data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <Pressable onPress={() => navigate('Categories')}>
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
    paddingBottom: 15,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.6,
    marginRight: 12,
    borderRadius: 15,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: RFValue(14),
    fontWeight: '800',
    margin: 19,
  },
});
