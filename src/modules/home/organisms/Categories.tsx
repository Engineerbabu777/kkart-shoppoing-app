import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {navigate} from '@navigation/NavigationUtil';
import {Colors, screenWidth} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  data: any;
};
export default function Categories({data}: Props) {
  const renderItem = ({item}: any) => {
    return (
      <Pressable
        onPress={() => navigate('Categories')}
        style={styles.itemContainer}>
        <Image source={{uri: item?.image_uri}} style={styles.contentImage} />
        <Text style={styles.nameText}>{item?.name}</Text>
      </Pressable>
    );
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        numColumns={Math.ceil(data?.length / 2)}
        data={data}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        style={styles.listContentContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
  },
  listContentContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  itemContainer: {
    marginRight: 15,
    width: screenWidth * 0.2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  contentImage: {
    marginBottom: 5,
    resizeMode: 'cover',
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
  },
  nameText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: RFValue(10),
    color: Colors.text,
  },
});
